const generateCityData = (
  city: string,
  numberOfPlaces: number,
  position: { lat: number; lng: number }
) => {
  return Array.from({ length: numberOfPlaces }, (_, index) => ({
    id: index + 1,
    coordinate: {
      latitude: position.lat + (Math.random() - 1) / 20,
      longitude: position.lng + (Math.random() - 1) / 20,
    },

    street: "street",
    building: "building",
    cityId: 0,
    cityName: "city name",
    plaqueId: "String",
    plaqueName: "String",
    providerId: 0,
    providerName: "String",
  }));
};

const markerDataCasablanca = generateCityData("Casablanca", 2000, {
  lat: 33.589886,
  lng: -7.603869,
});
const MarkerData = [...markerDataCasablanca];

export default MarkerData;
