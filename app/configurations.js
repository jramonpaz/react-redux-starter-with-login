export const ENVIORNMENT = "LOCAL";

export function isLocal() {
    return ENVIORNMENT === 'LOCAL';
}

export function getApiEndPoint(){
   return  isLocal() ? 'http://localhost:59315/api' : '/';
}
