import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default (shouldTrack, callback) => {
  const [permissionError, setPermissionError] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted') {
          setPermissionError('Permission to access location was denied');
        }

        subscriber = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 3000,
            distanceInterval: 10
          },
          callback
        );
      } catch (err) {
        setPermissionError(err);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [permissionError];
};
