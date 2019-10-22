import axios from 'axios';

const apiHost = 'http://www.mocky.io/v2/';

const rest = axios.create({
  baseURL: apiHost,
});

export function fetch(endpoint) {
  return rest.get(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
}

export default rest;
