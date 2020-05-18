import { selectRestaurants } from './slice';
import { restaurants } from './store.mocks';

describe('filter', () => {
  it('blank filter returns full list', () => {
    const filtered = selectRestaurants({
      restaurantSearch: {
        availableRestaurants: restaurants,
        filter: '',
      },
    });
    expect(filtered.length).toBe(25);
  });

  it('returns both restaurants on king street', () => {
    const filtered = selectRestaurants({
      restaurantSearch: {
        availableRestaurants: restaurants,
        filter: 'king st',
      },
    });
    expect(filtered.length).toBe(2);
  });

  it("'scaramouche' filter returns correct listing", () => {
    const filtered = selectRestaurants({
      restaurantSearch: {
        availableRestaurants: restaurants,
        filter: 'Scaramouche',
      },
    });
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe('Scaramouche Restaurant');
  });
});
