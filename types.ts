
export type MenuItem = [string, number | string];

export interface Menu {
  Breakfast?: MenuItem[];
  Lunch?: MenuItem[];
  Dinner?: MenuItem[];
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  date: string;
  userName: string;
}

export interface Restaurant {
  name: string;
  rating: string;
  hours: string;
  special: string;
  address: string;
  phone?: string | string[];
  menu: Menu;
}

export type RestaurantData = Record<string, Restaurant[]>;

export interface TeamMember {
  name: string;
  role: string;
  icon: string;
}
