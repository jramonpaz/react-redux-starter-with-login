import * as types from '../constants/coreConstants';

export function sampleRequest() {
	return {
		type: types.SAMPLE_REQUEST
	};
}

export function getSampleDataSuccess(exampleKey, data) {
	return {
		type: types.SAMPLE_SUCCESS,
		exampleKey: exampleKey,
		response: data
	}
}

export function sampleFailure() {
	return {
		type: types.SAMPLE_FAILURE
	}
}

export function getSampleData(exampleKey) {
	return function (dispatch) {
		return "test";
	};
}