import { useForm } from "react-hook-form"
import './styles/login.css'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { postLoginThunk } from "../store/slices/auth.slice"
import { useEffect, useState } from "react"

const Login = () => {
  const {register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()
  const [ verifyToken, setVerifyToken ] = useState('')

  useEffect(() => {
    setVerifyToken(localStorage.getItem('token'))
  }, [])

  const submit = async (data) => {
    await dispatch(postLoginThunk(data))
    setVerifyToken(localStorage.getItem('token'))
    reset({
      username: '',
      password: ''
      })
    }

  return (
    <>
    {
      verifyToken ? 
      <div className='login__container'>
        <button onClick={() => setVerifyToken(localStorage.removeItem('token'))}>logout</button>
      </div>
      :
      <form onSubmit={handleSubmit(submit)}>
      <div className='login__container'>
          <h2>Name</h2>
          <div className='login__item'>
            <label htmlFor="username">Username</label>
            <input {...register('username')} id='username' type="text" />
          </div>
          <div className='login__item'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} id='password' type="text" />
          </div>
        </div>
        <button>Submit</button>
        <p>Don´t have an account?<Link to={'/register'}><span> Sign up</span></Link> </p>
    </form>
    } 
    </>
  )
}

export default Login