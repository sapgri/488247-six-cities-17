import { useState } from 'react';

import PlacesSortingList from '../../../components/places-sorting-list/places-sorting-list';
import OfferCard from '../../../components/offer-card/offer-card';
import { getOffersByCities } from '../../../data/data';

import { CITIES, Settings } from '../../../const';

type CitieOffersProps = {
  activeCityIndex: number;
}

export default function CitieOffers({activeCityIndex}: CitieOffersProps) {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);


  // Бредовая функция только для того чтоб заставить линтер перестать ругаться.
  function onShutDownLinter() {
    return activeOffer;
  }

  const offersByCities = getOffersByCities();
  const offersSlice = offersByCities[CITIES[activeCityIndex]].slice(0, Settings.OffersCount);

  function handleMouseOn(id: string) {
    setActiveOffer(id);
  }

  function handleMouseOut() {
    setActiveOffer(null);
  }

  return (
    <section
      className="cities__places places"
      onMouseLeave={onShutDownLinter} // Вызов бредовой функции.
    >
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{Settings.OffersCount} place{
        Settings.OffersCount > 1 ? 's' : ''
      } to stay in {CITIES[activeCityIndex]}
      </b>
      <PlacesSortingList />
      <div className="cities__places-list places__list tabs__content">
        {offersSlice.map((offer) => (
          <OfferCard
            key={offer.id}
            {...offer}
            onHandleMouseOn={handleMouseOn}
            onHandleMouseOut={handleMouseOut}
          />
        ))}
      </div>
    </section>
  );
}
