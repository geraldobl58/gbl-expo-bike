export type CardProps = {
  id: string;
  title: string;
  price: number;
  model: string;
  image: string;
  handleRedirect?: (id: string) => void;
};
