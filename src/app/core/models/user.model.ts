export interface User {
  avatar?: string;
  email?: string;
  id?: number;
  firstName: string;
  lastName: string;
}

export interface Users {
  data: User[];
  ad: {};
  page: number;
  per_page: number;
  total: number;
  total_pages: number
}
