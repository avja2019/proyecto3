import { useForm } from "react-hook-form"
import './styles/login.css'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { postLoginThunk } from "../store/slices/auth.slice"
import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"

const Login = () => {
  const {register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()
  const [ verifyToken, setVerifyToken ] = useState('')

  useEffect(() => {
    setVerifyToken(localStorage.getItem('token'))
  }, [])

  //traer los datos de un usurio por defecto para el login

  const [usuario, getUsuario] = useFetch('');

  useEffect(() => {
    getUsuario("/users/1");
    console.log(usuario);
    
  }, []);

  const submit = async (data) => {
    console.log(data);
    
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
      verifyToken ? (
      <div className='login__container'>
        <button onClick={() => setVerifyToken(localStorage.removeItem('token'))}>logout</button>
      </div>
      ): (
        usuario ? (
      <form onSubmit={handleSubmit(submit)}>
      <div className='login__container'>
          <h2>Name</h2>
          <div className='login__item'>
            <label htmlFor="username">usuario</label>
            <input {...register('username')} id='username' type="text" defaultValue={usuario?.username } />
          </div>
          <div className='login__item'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} id='password' type="password" defaultValue={usuario?.password }/>
          </div>
        </div>
        <button>Submit</button>
        <p>Don´t have an account?<Link to={'/register'}><span> Sign up</span></Link> </p>
    </form>
    ): (
        <p>Cargando datos del usuario...</p>
      ) 
      )}  
    </>
  )
  
}

export default Login