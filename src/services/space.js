import { baseUrl, headers } from './api_helper';

// in your case: pass to paramters rockets:
export default function getData(urlSeg) {
  return fetch(`${baseUrl}${urlSeg}`, {
    headers,
  });
}
