import Header from '../../components/header/header';
import OfferGallery from './components/offer-gallery';
import PremiumMark from '../../components/premium-mark/premium-mark';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Rating from '../../components/rating/rating';
import OfferFeachersList from './components/offer-feachers-list';
import OfferInside from './components/offer-inside';
import OfferHost from './components/offer-host';
import OfferReviewsList from './components/offer-reviews-list';
import OfferMapSection from './components/offer-map-section';
import NearPlaces from './components/near-places';
import { mockSingleOffer } from '../../mock-data/mock-single-offer';
import { SingleOfferProps } from '../../types';

export default function OfferPage() {
  const offer: SingleOfferProps = mockSingleOffer;
  const {
    images,
    isPremium,
    title,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = offer;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <PremiumMark element='offer' />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <BookmarkButton
                  isFavorite={isFavorite}
                  element='offer'
                  width={31}
                  height={33}
                />
              </div>
              <div className="offer__rating rating">
                <Rating element='offer' rating={rating} />
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <OfferFeachersList
                type={type}
                bedrooms={bedrooms}
                maxAdults={maxAdults}
              />
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInside
                goods={goods}
              />
              <OfferHost
                host={host}
                description={description}
              />
              <OfferReviewsList />
            </div>
          </div>
          <OfferMapSection />
        </section>
        <div className="container">
          <NearPlaces />
        </div>
      </main>
    </div>
  );
}
