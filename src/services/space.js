import { baseUrl, headers } from "./api_helper"

// in your case: pass to paramters rockets:
export default async function  getData(urlSeg)  {
  return await fetch(`${baseUrl}${urlSeg}`, {
    headers:headers
  })
}

