import { BlogPost, TravelGuide, TeamMember } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'অন্ধকার থেকে আলোয় ফেরার গল্প',
    excerpt: 'কীভাবে একটি ছোট গ্রামের মানুষ তাদের জীবনযাত্রায় আমূল পরিবর্তন এনেছে...',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    category: 'Humanitarian',
    date: '২০২৪-০৫-০১',
  },
  {
    id: '2',
    title: 'শিক্ষার আলোয় বদলে যাচ্ছে ভবিষ্যৎ',
    excerpt: 'পথশিশুদের জন্য শুরু হওয়া একটি ছোট স্কুল আজ শত শত শিশুর স্বপ্ন পূরণ করছে...',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    category: 'Humanitarian',
    date: '২০২৪-০৪-২৫',
  },
  {
    id: '3',
    title: 'পরিবেশ রক্ষায় যুব সমাজের উদ্যোগ',
    excerpt: 'নদী পাড়ের প্লাস্টিক দূষণ রোধে একদল তরুণ গড়ে তুলেছে এক নতুন আন্দোলন...',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    category: 'Humanitarian',
    date: '২০২৪-০৪-১৫',
  }
];

export const TRAVEL_GUIDES: TravelGuide[] = [
  {
    id: '1',
    title: 'সিলেটের চা বাগানের নির্জনতা',
    location: 'সিলেট, বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=800',
    summary: 'সবুজ পাহাড় আর চা বাগানের মাঝে এক অন্যরকম ভ্রমণের অভিজ্ঞতা...',
  },
  {
    id: '2',
    title: 'সুইজারল্যান্ডের আল্পস পর্বতমালা',
    location: 'সুইজারল্যান্ড',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800',
    summary: 'তুষারে ঢাকা পাহাড় আর নীল হ্রদের অনন্য সংমিশ্রণ...',
  },
  {
    id: '3',
    title: 'প্রাচীন শহর ইস্তাম্বুল ভ্রমণ',
    location: 'তুরস্ক',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800',
    summary: 'দুই মহাদেশের সংযোগস্থলে দাঁড়িয়ে থাকা এক ঐতিহাসিক শহরের গল্প...',
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'আরিফ আহমেদ',
    role: 'প্রতিষ্ঠাতা ও প্রধান সম্পাদক',
    image: 'https://i.pravatar.cc/150?u=arif',
    bio: 'গল্পের মাধ্যমে মানুষের জীবন পরিবর্তনের স্বপ্ন দেখেন।',
  },
  {
    name: 'মালিহা নুসরাত',
    role: 'ভ্রমণ কাহিনী লেখক',
    image: 'https://i.pravatar.cc/150?u=maliha',
    bio: 'অজানাকে জানার নেশায় পৃথিবী ঘুরে বেড়ান।',
  }
];
