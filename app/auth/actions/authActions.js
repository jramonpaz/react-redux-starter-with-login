import * as types from '../constants/authConstants';
import * as api from '../../api/api';
import * as tokenStore from '../../api/tokenStore';

export function sampleRequest() {
	return {
		type: types.SAMPLE_REQUEST
	};
}

export function loginSuccess(data) {
	return {
		type: types.LOGIN_SUCCESS,
		response: data
	};
}



export function confirmAccount(exampleKey) {
	return function (dispatch) {
		console.log("account confirmed");
	};
}

export function login(values) {
	return function (dispatch) {
		api.token(values).then(function (response) {
			dispatch(loginSuccess(response));
			tokenStore.set("token", response.access_token);
			console.log(response);
		});
	};
}

export function setPassword(exampleKey) {
	return function (dispatch) {
		console.log("account confirmed");
	};
}
