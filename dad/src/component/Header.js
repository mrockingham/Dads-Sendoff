import React, {useStateState} from 'react'
import img1 from '../img/phila.jpg'
import dad1 from '../img/dad1.png'
import dad3 from '../img/dad3.jpg'
import dadmom from '../img/dadmom.jpg'
import recordimg from '../img/record.jpeg'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  
  


const Header = () => {

const headerPhotos =[
    dad1,
    dad3,
    dadmom
]


    const randomItem = headerPhotos [Math.floor(Math.random() * headerPhotos.length)]


    return (
        <div className= 'header-body'>

            <div className ='header-inside'>
                <div className ='header-text'>
                    <h1>In loving Memory</h1> 
                </div>
                <div className ='header-pic'>
                    <img className='dadpic' src={dad1} />
                </div>
                <div className ='header-text'>
                    <h1>Michael 'Big Mike' Rockingham</h1> 
                </div>
            
            
            </div>
        </div>
    )
}

export default Header
