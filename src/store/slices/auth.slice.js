import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import urlBase from "../../utils/urlBase";

const userSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    setUser: (state, { payload }) => payload
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer

export const postLoginThunk = (data) => async (dispatch) => {
  await axios.post(`${urlBase}/auth/login`, data)
    .then(res => {
      console.log(res.data)
      dispatch(setUser(res.data.token))
      localStorage.setItem('token',JSON.stringify(res.data.token))
    })
    .catch(err => console.error(err))
}