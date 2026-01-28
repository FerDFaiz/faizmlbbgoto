
export enum Role {
  TANK = 'Tank',
  FIGHTER = 'Fighter',
  ASSASSIN = 'Assassin',
  MAGE = 'Mage',
  MARKSMAN = 'Marksman',
  SUPPORT = 'Support'
}

export enum Tier {
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C'
}

export interface Hero {
  id: string;
  name: string;
  role: Role;
  tier: Tier;
  image: string;
  build: {
    items: string[];
    emblem: string;
    spell: string;
  };
  strengths: string[];
  weaknesses: string[];
}

export interface Guide {
  id: string;
  title: string;
  category: 'Beginner' | 'Advanced' | 'Hero Specific';
  content: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  fullText: string;
}
