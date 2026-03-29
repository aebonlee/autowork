import { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../../contexts/LanguageContext';
import { getCategoryBySlug } from '../../config/lessons';

export default function LessonDetail() {
  const { categorySlug, lessonSlug } = useParams();
  const { language, t } = useLanguage();
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const category = getCategoryBySlug(categorySlug);
  const lessonIndex = category?.lessons.findIndex(l => l.slug === lessonSlug) ?? -1;
  const lessonMeta = category?.lessons[lessonIndex];
  const prevLesson = lessonIndex > 0 ? category.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < (category?.lessons.length || 0) - 1 ? category.lessons[lessonIndex + 1] : null;

  useEffect(() => {
    setLoading(true);
    setError(false);
    import(`../../content/${categorySlug}/${lessonSlug}.js`)
      .then(mod => {
        setLessonData(mod.default);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [categorySlug, lessonSlug]);

  const content = useMemo(() => {
    if (!lessonData) return '';
    return language === 'ko' ? lessonData.contentKo : lessonData.contentEn;
  }, [lessonData, language]);

  // Extract headings for TOC
  const toc = useMemo(() => {
    if (!content) return [];
    const headings = [];
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^(#{2,3})\s+(.+)/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text.toLowerCase().replace(/[^a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ]+/g, '-').replace(/(^-|-$)/g, '');
        headings.push({ level, text, id });
      }
    }
    return headings;
  }, [content]);

  if (!category || !lessonMeta) {
    return (
      <div className="lessons-page">
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2>{language === 'ko' ? '레슨을 찾을 수 없습니다' : 'Lesson not found'}</h2>
          <Link to="/lessons" className="btn btn-primary btn-sm" style={{ marginTop: '20px' }}>
            {t('lessons.backToCategories')}
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="loading-page"><div className="loading-spinner" /></div>;
  }

  return (
    <div className="lessons-page">
      <div className="container">
        <div className="lesson-detail-breadcrumb">
          <Link to="/lessons">{t('lessons.title')}</Link>
          <span> / </span>
          <Link to={`/lessons/${categorySlug}`}>{language === 'ko' ? category.nameKo : category.nameEn}</Link>
          <span> / </span>
          <span>{language === 'ko' ? lessonMeta.titleKo : lessonMeta.titleEn}</span>
        </div>

        <div className="lesson-detail-layout">
          {/* TOC Sidebar */}
          {toc.length > 0 && (
            <aside className="lesson-toc">
              <h4>{t('lessons.tableOfContents')}</h4>
              <ul>
                {toc.map((h, i) => (
                  <li key={i} className={`toc-item toc-level-${h.level}`}>
                    <a href={`#${h.id}`}>{h.text}</a>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* Main Content */}
          <div className="lesson-detail-content">
            {error ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <p style={{ fontSize: '48px', marginBottom: '12px', opacity: 0.3 }}>📄</p>
                <p>{language === 'ko' ? '콘텐츠를 불러올 수 없습니다.' : 'Could not load content.'}</p>
              </div>
            ) : (
              <div className="markdown-body">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ children, ...props }) => {
                      const text = String(children);
                      const id = text.toLowerCase().replace(/[^a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ]+/g, '-').replace(/(^-|-$)/g, '');
                      return <h2 id={id} {...props}>{children}</h2>;
                    },
                    h3: ({ children, ...props }) => {
                      const text = String(children);
                      const id = text.toLowerCase().replace(/[^a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ]+/g, '-').replace(/(^-|-$)/g, '');
                      return <h3 id={id} {...props}>{children}</h3>;
                    },
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            )}

            {/* Prev / Next Navigation */}
            <div className="lesson-nav">
              {prevLesson ? (
                <Link to={`/lessons/${categorySlug}/${prevLesson.slug}`} className="lesson-nav-btn lesson-nav-prev">
                  <span className="lesson-nav-label">&larr; {t('lessons.prevLesson')}</span>
                  <span className="lesson-nav-title">{language === 'ko' ? prevLesson.titleKo : prevLesson.titleEn}</span>
                </Link>
              ) : <div />}
              {nextLesson ? (
                <Link to={`/lessons/${categorySlug}/${nextLesson.slug}`} className="lesson-nav-btn lesson-nav-next">
                  <span className="lesson-nav-label">{t('lessons.nextLesson')} &rarr;</span>
                  <span className="lesson-nav-title">{language === 'ko' ? nextLesson.titleKo : nextLesson.titleEn}</span>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
