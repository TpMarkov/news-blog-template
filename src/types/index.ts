export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
  source: {
    id: string;
    name: string;
  };
  category?: CategoryType;
  isBulgarian?: boolean;
}

export type CategoryType =
  | "politics"
  | "world"
  | "sports"
  | "culture"
  | "business"
  | "technology"
  | "entertainment"
  | "health"
  | "science";

export interface Category {
  id: CategoryType;
  name: string;
  nameBg: string;
  slug: string;
}

export const CATEGORIES: Category[] = [
  { id: "politics", name: "Politics", nameBg: "Политика", slug: "politika" },
  { id: "world", name: "World", nameBg: "Свят", slug: "svyat" },
  { id: "sports", name: "Sports", nameBg: "Спорт", slug: "sport" },
  { id: "culture", name: "Culture", nameBg: "Култура", slug: "kultura" },
  { id: "business", name: "Business", nameBg: "Бизнес", slug: "biznes" },
  {
    id: "technology",
    name: "Technology",
    nameBg: "Технологии",
    slug: "tehnologii",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    nameBg: "Забавление",
    slug: "zabavlenie",
  },
  { id: "health", name: "Health", nameBg: "Здраве", slug: "zdrave" },
  { id: "science", name: "Science", nameBg: "Наука", slug: "nauka" },
];

// Mock data functions
export const getMockBulgarianNews = (): Article[] => {
  const mockArticles: Article[] = [
    {
      id: "bg-1",
      title: "Парламентът прие нов закон за образованието",
      description:
        "Депутатите гласуваха на първо четене новия закон за средното образование, който предвижда значителни промени в учебните програми.",
      content:
        "Парламентът прие на първо четене новия закон за средното образование. Законопроектът предвижда въвеждането на нови учебни програми, които ще акцентират върху дигиталните умения и чуждите езици.",
      author: "Иван Петров",
      publishedAt: new Date().toISOString(),
      url: "https://example.com/article1",
      urlToImage:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      source: { id: "bg-news", name: "Български новини" },
      isBulgarian: true,
      category: "politics",
    },
    {
      id: "bg-2",
      title: "Българският туризъм с рекордни резултати през лятото",
      description:
        "Официалната статистика показва 25% ръст на чуждестранните туристи през юни и юли спрямо миналата година.",
      content:
        "Българският туризъм отбеляза рекордни резултати през летния сезон.",
      author: "Мария Иванова",
      publishedAt: new Date(Date.now() - 3600000).toISOString(),
      url: "https://example.com/article2",
      urlToImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      source: { id: "bg-news", name: "Български новини" },
      isBulgarian: true,
      category: "business",
    },
    {
      id: "bg-3",
      title: "Григор Димитров спечели турнир в САЩ",
      description:
        "Най-добрият български тенисист завоюва титлата на турнира от серията АТП в Индианаполис.",
      content: "Григор Димитров постигна убедителна победа на финала.",
      author: "Спорт редакция",
      publishedAt: new Date(Date.now() - 7200000).toISOString(),
      url: "https://example.com/article3",
      urlToImage:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800",
      source: { id: "bg-sport", name: "Български спорт" },
      isBulgarian: true,
      category: "sports",
    },
    {
      id: "bg-4",
      title: "София получи награда за зелен транспорт",
      description:
        "Европейската комисия отличи българската столица с приза за най-добри практики.",
      content: "София беше отличена с награда от Европейската комисия.",
      author: "Екологична редакция",
      publishedAt: new Date(Date.now() - 10800000).toISOString(),
      url: "https://example.com/article4",
      urlToImage:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
      source: { id: "bg-news", name: "Български новини" },
      isBulgarian: true,
      category: "politics",
    },
    {
      id: "bg-5",
      title: "Нова инвестиция в IT сектора в Пловдив",
      description:
        "Американска технологична компания обяви откриването на развоен център.",
      content:
        "Американската технологична компания обяви планове за откриване на развоен център в Пловдив.",
      author: "Бизнес редакция",
      publishedAt: new Date(Date.now() - 14400000).toISOString(),
      url: "https://example.com/article5",
      urlToImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      source: { id: "bg-business", name: "Български бизнес" },
      isBulgarian: true,
      category: "technology",
    },
  ];
  return mockArticles;
};

export const getMockWorldNews = (): Article[] => {
  const mockArticles: Article[] = [
    {
      id: "world-1",
      title: "Global Climate Summit Reaches Historic Agreement",
      description:
        "World leaders sign landmark deal on carbon emissions at the annual climate conference.",
      content:
        "In a historic breakthrough, representatives from 195 countries have agreed to ambitious new targets.",
      author: "John Smith",
      publishedAt: new Date().toISOString(),
      url: "https://example.com/world1",
      urlToImage:
        "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800",
      source: { id: "world-news", name: "World News" },
      isBulgarian: false,
      category: "world",
    },
    {
      id: "world-2",
      title: "Tech Giants Unveil New AI Breakthroughs",
      description:
        "Leading technology companies demonstrate revolutionary advances in artificial intelligence.",
      content:
        "Major technology companies showcased groundbreaking AI developments.",
      author: "Sarah Johnson",
      publishedAt: new Date(Date.now() - 3600000).toISOString(),
      url: "https://example.com/world2",
      urlToImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      source: { id: "tech-news", name: "Tech News" },
      isBulgarian: false,
      category: "technology",
    },
    {
      id: "world-3",
      title: "European Football Championship Qualifiers Heat Up",
      description:
        "Crucial matches this weekend will determine which teams secure spots.",
      content:
        "The race for qualification to next year's European Football Championship intensifies.",
      author: "Mike Brown",
      publishedAt: new Date(Date.now() - 7200000).toISOString(),
      url: "https://example.com/world3",
      urlToImage:
        "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800",
      source: { id: "sports-news", name: "Sports News" },
      isBulgarian: false,
      category: "sports",
    },
    {
      id: "world-4",
      title: "Breakthrough in Cancer Research Announced",
      description:
        "Scientists develop promising new treatment that shows remarkable results.",
      content: "Researchers have announced a breakthrough in cancer treatment.",
      author: "Dr. Emily Chen",
      publishedAt: new Date(Date.now() - 10800000).toISOString(),
      url: "https://example.com/world4",
      urlToImage:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800",
      source: { id: "health-news", name: "Health News" },
      isBulgarian: false,
      category: "health",
    },
    {
      id: "world-5",
      title: "SpaceX Successfully Launches New Satellite Constellation",
      description:
        "Mission marks another milestone in company's quest to provide global internet coverage.",
      content:
        "SpaceX successfully launched its latest batch of Starlink satellites.",
      author: "Robert Williams",
      publishedAt: new Date(Date.now() - 14400000).toISOString(),
      url: "https://example.com/world5",
      urlToImage:
        "https://images.unsplash.com/photo-1516849841054-80c75547e991?w=800",
      source: { id: "science-news", name: "Science News" },
      isBulgarian: false,
      category: "science",
    },
  ];
  return mockArticles;
};

// API functions
export const fetchBulgarianNews = async (
  _category?: CategoryType,
): Promise<Article[]> => {
  return getMockBulgarianNews();
};

export const fetchWorldNews = async (
  _category?: CategoryType,
): Promise<Article[]> => {
  return getMockWorldNews();
};

export const searchNews = async (query: string): Promise<Article[]> => {
  const allNews = [...getMockBulgarianNews(), ...getMockWorldNews()];
  return allNews.filter(
    (article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.description.toLowerCase().includes(query.toLowerCase()),
  );
};
