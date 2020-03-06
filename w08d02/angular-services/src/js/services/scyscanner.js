angular
  .module('flightsApp')
  .service('skyscanner', Skyscanner);

Skyscanner.$inject = ['$http'];
function Skyscanner($http) {
  this.getFlights = function getFlights(destination) {
    return $http
      .get('/api/flights', { params: { destination } }) // pass in our destination in our params
      .then((response) => {
        console.log('1', response);
        response.data.Quotes.forEach((quote) => {
          const destination = response.data.Places.find((place) => { //
            console.log('2', destination);
            return place.PlaceId === quote.OutboundLeg.DestinationId; // find a place if the condition is TRUE
          });

          quote.DestinationCity = destination.CityName; //
          quote.DestinationCountry = destination.CountryName; //

          const carrier = response.data.Carriers.find((carrier) => { //
            console.log('2', carrier);
            return carrier.CarrierId === quote.OutboundLeg.CarrierIds[0]; //
          });
          //if there is a carrier then return bellow
          if(carrier) quote.CarrierName = carrier.Name; // getting the carrier name and storing it in the carrier.Name on our index page.
        });

        return response.data.Quotes; // return the qoutes data
      });
  };
}
