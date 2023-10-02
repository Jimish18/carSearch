import React from 'react'
import { BiGasPump } from 'react-icons/bi';
import {GoPeople} from 'react-icons/go';
import {BsSpeedometer2} from 'react-icons/bs';
import {RiSteering2Fill} from 'react-icons/ri';
import {FiHeart} from 'react-icons/fi';
import './carcard.css'

const Carcard = ({id ,img , name , model , capacity ,fuel , avarage , drivingMode , rentPrice }) => {
  return (
    <div className='carCardDiv'>
        
        <img src={img} alt=""/>
        
        <div className='nameModelSection'>            
            <div className='carName' style={{fontSize : '1.5rem'}}>{name}</div>
            <div className='carModel'>{model}</div>
        </div>
        
        <div className='carFeatures' style={{width : '100%'}}>
            <div> 
                <div><BiGasPump className='icons'/>  {capacity} People</div>
                <div><GoPeople className='icons'/>  {fuel}</div> 
            </div>
            <div>
                <div><BsSpeedometer2 className='icons'/>  {avarage}</div>
                <div><RiSteering2Fill className='icons'/>  {drivingMode}</div> 
            </div>
        </div>
        <div className='hrline'></div>
        <div className='carRentOption'>
            <div>&#36;{rentPrice} <span>/month</span></div>
            <div>
                <FiHeart className='likeIcon'/>
                <button>Rent now</button>
            </div>
        </div>
    </div>
  )
}

export default Carcard