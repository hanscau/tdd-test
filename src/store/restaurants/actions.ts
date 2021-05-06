export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

export const loadRestaurants = () => (
  dispatch: any,
  getState: any,
  api: any,
) => {
  api.loadRestaurants().then((records: any) => {
    dispatch(storeRestaurants(records));
  });
};

const storeRestaurants = (records: any) => ({
  type: STORE_RESTAURANTS,
  records,
});
