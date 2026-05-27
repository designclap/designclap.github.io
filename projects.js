// ═══════════════════════════════════════════════════════
// projects.js — Clap Design Studio 공통 데이터 소스
// 새 프로젝트: PROJECTS 배열 맨 앞에 추가
// 이 파일 하나만 수정하면 index.html, work.html 모두 반영
// ═══════════════════════════════════════════════════════

const PROJECTS = [
  {
    slug: 'eco-platform',
    title: '국립생태원 에코플랫폼',
    title_en: 'National Ecology Institute Eco-Platform',
    client: '국립생태원',
    year: 2025,
    tags: ['Exhibition', 'Space'],
    thumb: '',
    images: [],
    desc: '국립생태원 에코플랫폼 서울관 조성 프로젝트입니다.',
    featured: true,
  },
  {
    slug: 'atelier-aechae',
    title: '아틀리에 애채',
    title_en: 'Atelier Aechae',
    client: '포레스트리빙',
    year: 2025,
    tags: ['Branding', 'Package'],
    thumb: '',
    images: [],
    desc: '아틀리에 애채 브랜드 아이덴티티 및 패키지 디자인.',
    featured: true,
  },
  {
    slug: 'daelim',
    title: '대림성모병원 기념 백서',
    title_en: 'Daelim Saint Mary Hospital Anniversary White Paper',
    client: '대림성모병원',
    year: 2024,
    tags: ['Editorial', 'Graphics'],
    thumb: '',
    images: [],
    desc: '대림성모병원 유방암병원 10주년·갑상선병원 20주년 기념 백서.',
    featured: true,
  },
  {
    slug: 'suseo-church',
    title: '수서교회 70년사',
    title_en: 'Suseo Church 70th Anniversary Archive',
    client: '수서교회',
    year: 2024,
    tags: ['Editorial', 'Archive'],
    thumb: '',
    images: [],
    desc: '수서교회 70년사 아카이브북 \'길에 서서 보라\' 편집 디자인.',
    featured: false,
  },
  {
    slug: 'kb-lounge',
    title: 'KB the FIRST LOUNGE',
    title_en: 'KB the FIRST LOUNGE Cafe Menu',
    client: 'KB',
    year: 2024,
    tags: ['Graphics', 'Editorial'],
    thumb: '',
    images: [],
    desc: 'KB the FIRST LOUNGE 카페 메뉴 그래픽 디자인.',
    featured: false,
  },
  {
    slug: 'animal-welfare',
    title: '국회의사당 동물복지 특별전',
    title_en: 'National Assembly Animal Welfare Exhibition',
    client: '국회의원 박홍근/한정애',
    year: 2024,
    tags: ['Exhibition', 'Space'],
    thumb: '',
    images: [],
    desc: '국회의사당 동물복지 특별전 <상처에서 치유로> 전시 공간 디자인.',
    featured: true,
  },
  {
    slug: 'cdc-report',
    title: '의원 감염관리 실태조사',
    title_en: 'Survey on Infection Control in Medical Clinics',
    client: '질병관리청',
    year: 2023,
    tags: ['Editorial', 'Graphics'],
    thumb: '',
    images: [],
    desc: '질병관리청 의원 감염관리 실태조사 보고서 편집 디자인.',
    featured: false,
  },
  {
    slug: 'public-mention',
    title: '남영동 퍼블릭멘션',
    title_en: 'Namyeong-dong Public Mention',
    client: '퍼블릭멘션',
    year: 2022,
    tags: ['Branding', 'Interior'],
    thumb: '',
    images: [],
    desc: '남영동 퍼블릭멘션 브랜딩 및 인테리어 디자인.',
    featured: true,
  },
  {
    slug: 'wholbrown',
    title: '홀브라운 베이커리',
    title_en: 'Whole Brown Bakery',
    client: '홀브라운',
    year: 2021,
    tags: ['Branding', 'Interior'],
    thumb: '',
    images: [],
    desc: '홀브라운 베이커리 브랜딩 및 공간 인테리어.',
    featured: true,
  },
  {
    slug: 'artisan-bakers',
    title: '아티장베이커스',
    title_en: 'Artisan Bakers',
    client: '아티장베이커스',
    year: 2021,
    tags: ['Branding', 'Space'],
    thumb: '',
    images: [],
    desc: '아티장베이커스 브랜드 아이덴티티 및 공간 디자인.',
    featured: false,
  },
  {
    slug: 'lepain-asser',
    title: '서래마을 르뺑아쎄르',
    title_en: 'Le Pain Asser Seorae',
    client: '르뺑아쎄르',
    year: 2020,
    tags: ['Branding', 'Interior'],
    thumb: '',
    images: [],
    desc: '서래마을 르뺑아쎄르 브랜딩 및 인테리어.',
    featured: false,
  },
  {
    slug: 'netflix',
    title: '넷플릭스 미디어데이',
    title_en: 'Netflix Media Day Event Design',
    client: '넷플릭스코리아',
    year: 2017,
    tags: ['Branding', 'Event'],
    thumb: '',
    images: [],
    desc: '넷플릭스 미디어데이 이벤트 디자인.',
    featured: false,
  },
];

// 사용 가능한 전체 태그 목록
const ALL_TAGS = [
  'Branding', 'Graphics', 'Space', 'Interior',
  'Exhibition', 'Signage', 'Editorial', 'Archive',
  'Package', 'Event'
];

// localStorage에서 불러오기 (CMS에서 저장한 데이터 우선)
function getProjects(){
  try {
    const saved = localStorage.getItem('clap_projects');
    return saved ? JSON.parse(saved) : PROJECTS;
  } catch(e) {
    return PROJECTS;
  }
}

function saveProjects(data){
  try {
    localStorage.setItem('clap_projects', JSON.stringify(data));
  } catch(e) {
    console.error('Save failed', e);
  }
}
