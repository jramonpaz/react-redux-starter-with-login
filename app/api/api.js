import * as configs from '../configurations';

export function get(endpoint) {

    var url = configs.getApiEndPoint().concat("/").concat(endpoint);
    return fetch(url, { credentials: 'include' })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.movies);
            return responseJson.movies;
        })
        .catch((error) => {
            console.error(error);
        });
}

export function post(endpoint) {

    var url = configs.getApiEndPoint().concat("/").concat(endpoint);
    return fetch(url, { method: 'post' })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}


export function token(values) {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let loginRequest = "userName="
        .concat(encodeURIComponent(values.username))
        .concat("&password=")
        .concat(encodeURIComponent(values.password))
        .concat("&grant_type=password");

    let myInit = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: loginRequest
    };
    let url = configs.getApiEndPoint().concat("/").concat('token');

    let myRequest = new Request(url, myInit);

    return fetch(myRequest)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}
