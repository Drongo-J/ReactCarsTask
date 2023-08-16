import React from 'react'
import cars from '../../data/cars'
import Car from '../CarComponent/Car'
import './Cars.css'

export default function Cars({updateCar}){
  return (
    <div className='cars-container'>
        {
            cars.map(carData => {
                return <Car carData={carData} updateCar={updateCar}></Car>
            }) 
        }
    </div>
  )
}
