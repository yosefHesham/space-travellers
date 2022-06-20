import { headers } from "./api_helper"

// in your case: pass to paramters rockets:
const getData = async (urlSeg) => {
  await fetch(`baseUrl/${urlSeg}`, {
    headers:headers
  })
}