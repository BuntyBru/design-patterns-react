export type ListingProps = {
  title: string;
  image: string;
  name: string;
  city: string;
  state: string;
  price: number;
  floors: number;
  rooms: number;
  sqft: number;
  id: string;
};

export type WithLoaderProps = {
  Component: React.FunctionComponent;
  url: string;
};

export type HouseListProps = {
  data: ListingProps[];
};
