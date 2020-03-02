import { useContext } from 'react';
import { TrackContext } from '../context/TrackContext';
import { LocationContext } from '../context/LocationContext';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name }
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(name, locations);
  };

  return [saveTrack];
};
