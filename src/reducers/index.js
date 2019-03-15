import {REQUEST_BEFORE, REQUEST_AFTER, REQUEST_ERROR , POST_REGISTER_SUCCESS, CLOSE_CUSTOM_ALERT, SET_DEVICE_ID, SET_GEO_LOCATION} from '../constants';
const initialState = {
    bloodGroupList: ['A+', 'B+', 'O+', 'A-', 'B-', 'O-', 'AB+', 'AB-', 'Rare'],
    showLoader : false,
    alertShow : false,
    alertMessage : '',
    alertType : '',
    deviceId : '',
    geoLocation : '',
  };

export default function rootReducer (state = initialState, action) {
    
    switch(action.type){
      case REQUEST_BEFORE:
        return {
            ...state,
            showLoader: true
        };
      case REQUEST_AFTER:
        return {
            ...state,
            showLoader: false
        };
      case REQUEST_ERROR:
        return {
            ...state,
            alertMessage : action.error.statusText,
            alertType : 'danger',
            alertShow : true,
            showLoader: false
        };
      case POST_REGISTER_SUCCESS:
        return {
            ...state,
            alertMessage : action.response.statusText,
            alertType : 'success',
            alertShow : true,
            showLoader: false
        };
      case CLOSE_CUSTOM_ALERT:
        return {
          ...state,
          alertShow : false
        }
      case SET_DEVICE_ID:
        return {
          ...state,
          deviceId : action.deviceId
        }
      case SET_GEO_LOCATION:
        return {
          ...state,
          geoLocation : action.geoLocation
        }
        
      default :
            return state;
    }
};