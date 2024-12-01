const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const RATING_VALUES = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
] as const;

const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  NotFoundPage: '*',
} as const;

const AuthStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

const OFFERS_COUNT = 5;
const IS_LOGGED = true;
const RATING_RATIO = 20;
const ACTIVE_CITY_INDEX = 0;
const NEIGHBOURHOOD_PLACES = 3;
const GALLERY_IMAGE_COUNT = 6;

export {
  CITIES,
  RATING_VALUES,
  AppRoute,
  AuthStatus,
  OFFERS_COUNT,
  IS_LOGGED,
  RATING_RATIO,
  ACTIVE_CITY_INDEX,
  NEIGHBOURHOOD_PLACES,
  GALLERY_IMAGE_COUNT,
};
