const lesson = {
  titleKo: '마케팅 자동화',
  titleEn: 'Marketing Automation',
  contentKo: `# 마케팅 자동화

## 개요
마케팅 업무에는 콘텐츠 게시, 이메일 캠페인, 성과 분석 등 반복 작업이 많습니다. 자동화를 통해 마케터는 전략 수립에 집중하고 실행은 시스템에 맡길 수 있습니다.

## 주요 자동화 영역

### 소셜 미디어 스케줄링
\`\`\`python
import schedule
from datetime import datetime

class SocialMediaScheduler:
    def __init__(self, platforms):
        self.platforms = platforms  # ["instagram", "twitter", "facebook"]

    def schedule_post(self, content, images, post_time):
        """예약 게시물 등록"""
        for platform in self.platforms:
            api = get_platform_api(platform)
            api.create_scheduled_post(
                text=content[platform],
                media=images,
                scheduled_time=post_time
            )

    def get_best_posting_time(self, platform):
        """참여율 데이터 기반 최적 게시 시간 분석"""
        analytics = get_analytics(platform)
        return analytics.get_peak_engagement_hours()
\`\`\`

### 이메일 캠페인 자동화
- 고객 세그먼트별 맞춤 이메일 자동 발송
- 드립 캠페인: 가입 → 환영 → 사용법 안내 → 프로모션 순차 발송
- 발송 시간 최적화 (고객별 최적 시간대 학습)

### 분석 리포트 자동화
- Google Analytics, 소셜 미디어 API에서 데이터 자동 수집
- 주간/월간 마케팅 성과 보고서 자동 생성 및 공유
- KPI 대시보드 실시간 갱신 (CTR, CPA, ROI)

### A/B 테스트 자동화
- 제목, 콘텐츠, CTA 버튼 변형 자동 생성 및 배포
- 통계적 유의성 도달 시 자동으로 승자 선택
- 테스트 결과를 다음 캠페인에 자동 반영

## 추천 도구
- **Buffer / Hootsuite**: 소셜 미디어 관리
- **Mailchimp / SendGrid**: 이메일 마케팅
- **n8n / Make**: 워크플로우 자동화
- **Google Looker Studio**: 무료 대시보드`,
  contentEn: `# Marketing Automation

## Overview
Marketing involves many repetitive tasks: content publishing, email campaigns, and performance analysis. Automation lets marketers focus on strategy while systems handle execution.

## Key Automation Areas

### Social Media Scheduling
\`\`\`python
import schedule
from datetime import datetime

class SocialMediaScheduler:
    def __init__(self, platforms):
        self.platforms = platforms  # ["instagram", "twitter", "facebook"]

    def schedule_post(self, content, images, post_time):
        """Register scheduled posts"""
        for platform in self.platforms:
            api = get_platform_api(platform)
            api.create_scheduled_post(
                text=content[platform],
                media=images,
                scheduled_time=post_time
            )

    def get_best_posting_time(self, platform):
        """Analyze optimal posting time from engagement data"""
        analytics = get_analytics(platform)
        return analytics.get_peak_engagement_hours()
\`\`\`

### Email Campaign Automation
- Auto-send personalized emails per customer segment
- Drip campaigns: signup -> welcome -> tutorial -> promotion sequence
- Optimize send times (learn each customer's peak hours)

### Analytics Report Automation
- Auto-collect data from Google Analytics and social media APIs
- Auto-generate and share weekly/monthly marketing reports
- Real-time KPI dashboard updates (CTR, CPA, ROI)

### A/B Testing Automation
- Auto-generate and deploy variations of titles, content, CTAs
- Auto-select winner when statistical significance is reached
- Automatically apply test results to next campaigns

## Recommended Tools
- **Buffer / Hootsuite**: Social media management
- **Mailchimp / SendGrid**: Email marketing
- **n8n / Make**: Workflow automation
- **Google Looker Studio**: Free dashboards`,
};
export default lesson;
