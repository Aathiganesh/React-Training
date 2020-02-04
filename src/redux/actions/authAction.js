import axios from 'axios'
import {GET_ERRORS, CLEAR_ERRORS} from '../actions/type'
import  jwt_decode from 'jwt-decode'
import setAuthToken from '../../utils/setAuthToken';
import {SET_CURRENT_USER} from '../actions/type'

export const registerUser = (userData, history) => dispatch =>{
    axios.post("api/user/register", userData)
    .then(res=>history.push("/login"))
    .catch(err =>
            dispatch({
                type:GET_ERRORS,
                payload: err.response.data
            })
        );
}

//Login action

export const loginuser = userData => dispatch => {
    axios.post("/api/users/login",userData)
    .then(res => {
        const {token} = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);

    })
    .catch( err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    )
}

// Set logged in user
export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };

