import React, {useState, useEffect} from 'react'
import InputEmoji from 'react-input-emoji'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Memorieslist = (props) => {

    console.log('what is this ', props )
    const [inputM, setInputM]= useState({Name:'', story:''})
    const {push} = useHistory()
    const history =useHistory()

    const submit = (e)=>{
        e.preventDefault()
    
        axios.post('http://localhost:5002/api/story', inputM)
       setInputM({Name:'', story:''})
        push('/')
        history.go()
    }
    
    const handleChange = (event) =>{
        const {
            target: { name, value },
          } = event;
          //⬆this is the same as event.target.value\event.target.name
          setInputM({ ...inputM, [name]: value });
    }


    return (
        <div className='memories-section'>
            <h2>Memories</h2>
            < Card className='memories'>
            {props.memories.map(memories =>{
                return(
                    <div>
                        <div className='read-memories'>
                            <CardHeader className='memories-name'>
                              Name: {memories.Name}  
                            </CardHeader>
                            <CardBody className='comment-name'>
                            Memories: {memories.story}  
                            </CardBody>
                         </div>
                     
                    </div>
                )
                })}
            </Card >
            <Form onSubmit ={submit} className='memories-form'>
                <FormGroup>
                <h2 className='memories-input-name'>Leave A Memory</h2>
                <Label className='comments-input-name'>Name</Label>
                </FormGroup>
            <Input
                className='memories-name-input'
                type='text'
                name='Name'
                style={{width:'88.5%'}}
                placeholder="Type a message"
                value={inputM.Name}
                onChange={handleChange}
            />
            <Label className='memories-input-name'>Story</Label>
            <Input
                className='memories-story-input'
                type='text'
                name='story'
                style={{width:'88.5%'}}
                placeholder="Type a message"
                value={inputM.story}
                onChange={handleChange}
            />
            <div></div>
            <Button style={{marginTop:'2%'}} type='submit' value="submit" className='btn1 solid'>Submit</Button>
             </Form>   
            </div>
    )
}

export default Memorieslist
