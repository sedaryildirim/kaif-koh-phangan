export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags: string[];
}

export interface Review {
  name: string;
  meta: string;
  date: string;
  text: string;
  rating: number;
}

export type MenuTab = 'breakfast' | 'allDay' | 'drinks';
