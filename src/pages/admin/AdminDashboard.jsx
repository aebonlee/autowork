import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { supabase } from '../../utils/supabase';

export default function AdminDashboard() {
  const { language } = useLanguage();
  const [stats, setStats] = useState({ users: 0, posts: 0, comments: 0 });

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    try {
      const [users, posts, comments] = await Promise.all([
        supabase.from('user_profiles').select('id', { count: 'exact', head: true }),
        supabase.from('autowork_board_posts').select('id', { count: 'exact', head: true }),
        supabase.from('autowork_board_comments').select('id', { count: 'exact', head: true }),
      ]);
      setStats({
        users: users.count || 0,
        posts: posts.count || 0,
        comments: comments.count || 0,
      });
    } catch {
      // silently fail
    }
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h3>ADMIN</h3>
        <ul className="admin-nav">
          <li><a className="admin-nav-item active" href="#">\uD83D\uDCCA {language === 'ko' ? '대시보드' : 'Dashboard'}</a></li>
          <li><a className="admin-nav-item" href="#">\uD83D\uDC65 {language === 'ko' ? '사용자 관리' : 'Users'}</a></li>
          <li><a className="admin-nav-item" href="#">\uD83D\uDCC4 {language === 'ko' ? '게시글 관리' : 'Posts'}</a></li>
        </ul>
      </aside>

      <div className="admin-main">
        <div className="admin-header">
          <h1>{language === 'ko' ? '관리자 대시보드' : 'Admin Dashboard'}</h1>
        </div>

        <div className="admin-stats">
          <div className="admin-stat-card">
            <div className="admin-stat-label">{language === 'ko' ? '총 사용자' : 'Total Users'}</div>
            <div className="admin-stat-value">{stats.users}</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">{language === 'ko' ? '게시글' : 'Posts'}</div>
            <div className="admin-stat-value">{stats.posts}</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-label">{language === 'ko' ? '댓글' : 'Comments'}</div>
            <div className="admin-stat-value">{stats.comments}</div>
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>{language === 'ko' ? '최근 활동' : 'Recent Activity'}</th>
                <th>{language === 'ko' ? '유형' : 'Type'}</th>
                <th>{language === 'ko' ? '날짜' : 'Date'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-light)' }}>
                  {language === 'ko' ? '활동 데이터가 없습니다.' : 'No activity data yet.'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
