import axios from "axios"
import urlBase from "../utils/urlBase"

const useAuth = (path, data) => {
  const url = `${urlBase}${path}`
  axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

export default useAuth
