import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterPrice.css';

const FilterPrice = ({setInputPrice}) => {
  const {handleSubmit, register, reset} = useForm();

  const submit = (data) => {
    setInputPrice({
        min: data.min,
        max: data.max || Infinity,
    })
  }

  return (
    <div className='contenedor__price'>
       <h3 className='contenedor__name'>Price: </h3>
       <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="min">min: </label>
        <input {...register('min')} id='min' type="text" />
        <label htmlFor="max">max: </label>
        <input {...register('max')} id='max' type="text" />  
        <button>Filtrar</button>   
       </form>
    </div>
  )
}

export default FilterPrice
