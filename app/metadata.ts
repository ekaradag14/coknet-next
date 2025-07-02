// Metadata configuration similar to Next.js app router
// This will be useful during migration and can be replaced with Next.js metadata

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    title?: string;
    description?: string;
    image?: string;
  };
}

// Default metadata
export const defaultMetadata: PageMetadata = {
  title: 'ÇokNet - Eğitim Platformu',
  description: 'ÇokNet ile eğitimde başarıya ulaşın. Kişiselleştirilmiş öğrenme deneyimi ve uzman mentor desteği.',
  keywords: ['eğitim', 'online eğitim', 'mentorluk', 'üniversite hazırlık', 'YKS'],
  openGraph: {
    title: 'ÇokNet - Eğitim Platformu',
    description: 'ÇokNet ile eğitimde başarıya ulaşın. Kişiselleştirilmiş öğrenme deneyimi ve uzman mentor desteği.',
    image: '/og-image.jpg',
    url: 'https://coknet.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ÇokNet - Eğitim Platformu',
    description: 'ÇokNet ile eğitimde başarıya ulaşın.',
    image: '/twitter-image.jpg',
  },
};

// Page-specific metadata
export const pageMetadata: Record<string, PageMetadata> = {
  '/': {
    title: 'ÇokNet - Ana Sayfa',
    description: 'ÇokNet eğitim platformuna hoş geldiniz. Kişiselleştirilmiş öğrenme deneyimi ile hedeflerinize ulaşın.',
  },
  '/hakkimizda': {
    title: 'Hakkımızda - ÇokNet',
    description: 'ÇokNet hakkında bilgi edinin. Misyonumuz, vizyonumuz ve değerlerimiz.',
  },
  '/blog': {
    title: 'Blog - ÇokNet',
    description: 'Eğitim, motivasyon ve başarı hikayeleri. ÇokNet blog sayfasında güncel içerikler.',
  },
  '/ozellikler': {
    title: 'Özellikler - ÇokNet',
    description: 'ÇokNet platformunun özelliklerini keşfedin. Kişiselleştirilmiş öğrenme araçları.',
  },
  '/faydalari': {
    title: 'Faydalar - ÇokNet',
    description: 'ÇokNet ile elde edeceğiniz faydalar. Başarıya giden yolda size nasıl yardımcı oluyoruz.',
  },
  '/iletisim': {
    title: 'İletişim - ÇokNet',
    description: 'ÇokNet ile iletişime geçin. Sorularınız için bize ulaşın.',
  },
  '/hesaplama': {
    title: 'Puan Hesaplama - ÇokNet',
    description: 'YKS puan hesaplama araçları. TYT ve AYT puanlarınızı hesaplayın.',
  },
};

// Function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMetadata {
  return pageMetadata[pathname] || defaultMetadata;
}

// Function to generate full metadata object
export function generateMetadata(pathname: string): PageMetadata {
  const pageMeta = getPageMetadata(pathname);
  return {
    ...defaultMetadata,
    ...pageMeta,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...pageMeta.openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...pageMeta.twitter,
    },
  };
} 