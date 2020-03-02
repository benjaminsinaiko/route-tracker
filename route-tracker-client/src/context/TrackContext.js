import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case '':

    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};
const createTrack = dispatch => (name, locations) => {
  console.log(name, locations.length);
};

export const { Provider: TrackProvider, Context: TrackContext } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
