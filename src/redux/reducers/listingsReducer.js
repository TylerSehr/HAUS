import { combineReducers } from 'redux';
import Listing from '../../classes/Listing.class'
import { getAndParseListings } from '../requests/listingRequests'

const listings = (state = null, action) => {
    switch (action.type) {
      case 'GET_LISTINGS':
        //state = getAndParseListings(action.payload) // action.payload is our search params
        return state;
      default:
        return state;
    }
};

export default listings
  