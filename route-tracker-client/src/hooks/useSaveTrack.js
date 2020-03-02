import { useContext } from 'react';
import { TrackContext } from '../context/TrackContext';
import { LocationContext } from '../context/LocationContext';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset
  } = useContext(LocationContext);
  const navigation = useNavigation();

  const saveTrack = async () => {
    await createTrack(name, locations);
    await reset();
    navigation.navigate('Tracks');
  };

  return [saveTrack];
};
