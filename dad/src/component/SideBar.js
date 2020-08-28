import React from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText} from 'reactstrap';
    import {Link} from "react-router-dom";

const  SideBar = () => {
    return (
        <div className= 'side-bar'>
        <Card body inverse style={{ backgroundColor: 'grey', borderColor: '#333' }} className= 'side-bar-info'>
            <CardHeader className='memorial-details'>
                <div>Info</div>
             </CardHeader> 
             <CardBody> 
                <p className='details1'>Memorial Date: 09/02/2020</p>
                <p className='details2'>Location: <br></br>520 Smith Church Rd, Roanoke Rapids, NC 27870</p>
                <p className='Zoom'>Zoom Link: <br></br> Comming Soon</p>
                </CardBody> 
        </Card>   
        <Card body inverse style={{ backgroundColor: 'grey', borderColor: '#333' }} className= 'side-bar-links'>    
            <CardHeader className ='shared-links'>
                <div>Links</div>
                </CardHeader>
                <CardBody> 
                <a href="https://www.facebook.com/groups/942847939527684" target="_blank">Facebook Group</a>
                <p className='shared2'></p>
                <p className='shared3'></p>
                </CardBody>
        </Card>
        </div>
    )
}

export default  SideBar
