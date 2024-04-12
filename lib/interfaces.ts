export interface ServiceFormData {
  title: string;
  description: string;
  observation?: string;
  photo: string;
  categories: string[];
  price: string;
  extra?: {
    name: string;
    price: number;
  }[];
}
