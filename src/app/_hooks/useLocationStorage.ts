// hooks/useLocationStorage.ts
import { useState, useEffect } from 'react';
import Location from '@/types/GeoLocation';

const useLocationStorage = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const savedLocations = JSON.parse(
      localStorage.getItem("locations") || "[]"
    );
    setLocations(savedLocations);
  }, []);

  const saveLocation = (newLocation: Location) => {
    const updatedLocations = [...locations, newLocation];
    setLocations(updatedLocations);
    localStorage.setItem("locations", JSON.stringify(updatedLocations));
  };

  return { locations, saveLocation };
};

export default useLocationStorage;