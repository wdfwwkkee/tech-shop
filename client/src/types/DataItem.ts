
export interface Item {
  id: number;
  name: string;
  price: number;
  img: string;
  tag?: string;
  count: number;
  availability?: boolean;
  specs: {
    title: string;
    value: string | number;
  }[];
}
