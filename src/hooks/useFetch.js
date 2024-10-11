import axios from "axios";
import { useState } from "react";
import urlBase from "../utils/urlBase";

const useFetch = () => {
  const [ apiData, setApiData ] = useState();

  const getApi = (patch) => {
    const url = `${urlBase}${patch}`
    axios.get(url)
      .then(res => setApiData(res.data))
      .catch(err => console.error(err))
  }

  return [ apiData, getApi ]
}

export default useFetch;