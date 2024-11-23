import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import OfferCard from '../../components/offer-card/offer-card';
import PlacesSortingList from '../../components/places-sorting-list/places-sorting-list';
import { OFFERS_COUNT } from '../../const';
import { mochData } from '../../moch-data/moch-data';

export default function MainPage() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ OFFERS_COUNT } places to stay in Amsterdam</b>
              <PlacesSortingList />
              <div className="cities__places-list places__list tabs__content">
                {mochData.slice(0, OFFERS_COUNT).map((offer) => (
                  <OfferCard key={offer.id} {...offer} />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}