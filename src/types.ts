import { AuthStatus, Prefix, CITIES, OFFER_TYPES } from './const';

type CityName = typeof CITIES[number];

type OfferType = typeof OFFER_TYPES[number];

type PrefixType = typeof Prefix[keyof typeof Prefix];

type SortType = 'Popular'
| 'Price: low to high'
| 'Price: high to low'
| 'Top rated first';

type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

type Offers = Offer[];

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  name: CityName;
  location: Location;
}

type User = {
  isPro?: boolean;
  name: string;
  avatarUrl: string;
}

type FullOffer = Omit<Offer, 'previewImage'> & {
  description: string;
  images: string[];
  goods: string[];
  host: User;
  bedrooms: number;
  maxAdults: number;
}

type Rating = 1 | 2 | 3 | 4 | 5 | null;

type Response = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

type ModifiedRouteProps = {
  authStatus: typeof AuthStatus[keyof typeof AuthStatus];
  children: JSX.Element;
}

type Point = {
  id: string;
  latitude: number;
  longitude: number;
}

export type {
  CityName,
  OfferType,
  PrefixType,
  SortType,
  Offer,
  Offers,
  Location,
  City,
  User,
  FullOffer,
  Rating,
  Response,
  ModifiedRouteProps,
  Point,
};
