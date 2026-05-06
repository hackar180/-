export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

export interface TravelGuide {
  id: string;
  title: string;
  location: string;
  image: string;
  summary: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}
