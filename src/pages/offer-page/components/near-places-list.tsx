import OfferCard from '../../../components/offer-card/offer-card';

import { nearPlaces } from '../../../mocks';
import { NEIGHBOURHOOD_PLACES } from '../../../const';

export default function NearPlacesList() {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {nearPlaces.slice(0, NEIGHBOURHOOD_PLACES)
          .map((offer) => (
            <OfferCard key={offer.id} {...offer} prefix='near-places' />
          ))}
      </div>
    </section>
  );
}
