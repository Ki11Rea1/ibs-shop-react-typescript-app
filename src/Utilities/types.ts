export type Picture = {
  path: string;
  alt: string;
};

export type Price = {
  value: number;
  currency: string;
};

export type ItemType = {
  id: string;
  name: string;
  description: string;
  info: string;
  details: string;
  like: boolean;
  picture: Picture;
  price: Price;
};

export type ItemsState = {
  items: ItemType[];
  item: ItemType | [];
  searchedItems: ItemType[];
  loading: string;
  search: string;
};

export type Params = {
  id: string;
};
