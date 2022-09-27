import { types as sdkTypes } from './util/sdkLoader'

const { LatLng, LatLngBounds } = sdkTypes

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  // {
  //   id: 'default-new-york',
  //   predictionPlace: {
  //     address: 'New York City, New York, USA',
  //     bounds: new LatLngBounds(
  //       new LatLng(40.917576401307, -73.7008392055224),
  //       new LatLng(40.477399, -74.2590879797556)
  //     ),
  //   },
  // },
  // {
  //   id: 'default-los-angeles',
  //   predictionPlace: {
  //     address: 'Los Angeles, California, USA',
  //     bounds: new LatLngBounds(
  //       new LatLng(34.161440999758, -118.121305008073),
  //       new LatLng(33.9018913203336, -118.521456965901)
  //     ),
  //   },
  // },
  // {
  //   id: 'default-san-francisco',
  //   predictionPlace: {
  //     address: 'San Francisco, California, USA',
  //     bounds: new LatLngBounds(
  //       new LatLng(37.8324430069081, -122.354995082683),
  //       new LatLng(37.6044780500533, -122.517910874663)
  //     ),
  //   },
  // },
  // {
  //   id: 'default-seattle',
  //   predictionPlace: {
  //     address: 'Seattle, Washington, USA',
  //     bounds: new LatLngBounds(
  //       new LatLng(47.7779392908564, -122.216605992108),
  //       new LatLng(47.3403950185547, -122.441233019046)
  //     ),
  //   },
  // },
  // {
  //   id: 'default-portland',
  //   predictionPlace: {
  //     address: 'Portland, Oregon, USA',
  //     bounds: new LatLngBounds(
  //       new LatLng(45.858099013046, -122.441059986416),
  //       new LatLng(45.3794799927623, -122.929215816001)
  //     ),
  //   },
  // },
  // {
  {
    id: 'default-copenhagen',
    predictionPlace: {
      address: 'Copenhagen, Capital RegionDenmark, Denmark',
      bounds: new LatLngBounds(new LatLng(55.727852, 12.822593), new LatLng(55.588413, 12.499474))
    }
  },
  {
    id: 'default-odense',
    predictionPlace: {
      address: 'Odense, RegionSouthern Denmark, Denmark',
      bounds: new LatLngBounds(new LatLng(55.482592, 10.576854), new LatLng(55.288122, 10.221037))
    }
  },
  {
    id: 'default-aarhus',
    predictionPlace: {
      address: 'Aarhus, Central Denmark Region, Denmark',
      bounds: new LatLngBounds(new LatLng(56.240905, 10.255086), new LatLng(56.117521, 10.114294))
    }
  }
]
export default defaultLocations
