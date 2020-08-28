import React, {useState} from 'react'
import Comments from './comments'
import { Card, Button, CardTitle, CardText,
    Modal, ModalHeader, ModalBody, ModalFooter, CardBody, CardHeader } from 'reactstrap';


const About = (props) => {

 const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    return (
        <div className='extra-containter1'>
            
            <div className='about-container'>
                
                <Card body inverse style={{ backgroundColor: 'grey', borderColor: '#333' }} className ='about-section'>
                    <CardHeader className='about-title'>
                        <h2>History</h2>  
                    </CardHeader>
                        <CardBody className='about-box'>
                            <p className='about-text-box'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </CardBody>
                
                </Card>
                <Card body inverse style={{ backgroundColor: 'grey', borderColor: '#333' }} className='update-section'>
                    <CardHeader className = 'update-title'>
                        <h2>Updates</h2>
                    </CardHeader>
                    <CardBody className='update-box'>
                        <p className='update-text-box'>
                        Hi, I just wanted to let everyone know, we will<br></br> be having a memorial... 
                        </p>
                    </CardBody>
                    <Button style={{fontWeight: '900'}} color="muted" onClick={toggle}>More info</Button>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                         <ModalHeader toggle={toggle}>Updates</ModalHeader>
         <ModalBody>
                         Hi, I just wanted to let everyone know, we will be having a memorial
                        service for Michael BigMike Rockingham on Sept, 2 at 11:00 am. For 
                        anyone, not able to attend we will also be holding a Virtual Zoom video chat as well. Link well be coming soon.
        </ModalBody>
        <ModalFooter>
          {' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
                </Card>
                
            </div>
            < Comments />
        </div>    
    )
}

export default About
