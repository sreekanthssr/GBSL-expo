import {REQUEST_BEFORE, REQUEST_AFTER, REQUEST_ERROR , POST_REGISTER_SUCCESS, CLOSE_CUSTOM_ALERT, SET_DEVICE_ID, SET_GEO_LOCATION} from '../constants';

export function setDeviceId (deviceId){
    return (dispatch) =>{
        dispatch({
            type: SET_DEVICE_ID,
            deviceId 
        });
    }
}

export function setLocation (deviceId){
    navigator.geolocation.getCurrentPosition(
        (geoLocation) => {
            alert(JSON.stringify(geoLocation));
            return (dispatch) =>{
                dispatch({
                    type: SET_GEO_LOCATION,
                    geoLocation 
                });
            }
         },
         (error) => {
            alert.log(error)
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000}
    );
    
}

export function registerUser (data){
    return (dispatch) => {
        dispatch(postRequestBefore());
        /*
        name: state.name,
                            phoneNumber : state.phoneNumber,
                            emailId: state.emailId,
                            bloodGroup: state.bloodGroup
        return(fetch('https://api.myjson.com/bins/fz62x'))
        .then(res => res.json())
        .then(json => {

            return(dispatch(postRequestSuccess(json)))
        })
        .catch(err => dispatch(postRequestFailure(err)))*/
        setTimeout(()=>{
            return(dispatch(postRequestSuccess({statusCode: 200, statusText: "Registration Completed"})))
        },3000);
    }
}


function postRequestBefore() {

    return {
        type: REQUEST_BEFORE
    };
}

function postRequestSuccess(response) {

    return {
        type: POST_REGISTER_SUCCESS,
        response
    }
}

function postRequestFailure(error) {
    return {
        type: REQUEST_ERROR,
        error
    }
}

export  function customAlertClose(state){
    return (dispatch) => {
        dispatch({
            type: CLOSE_CUSTOM_ALERT
        });
    }
}
