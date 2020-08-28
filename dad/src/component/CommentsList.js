import React, {useState, useEffect} from 'react'
import InputEmoji from 'react-input-emoji'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const CommentsList = (props) => {
   console.log('what is this ', props )
    const [inputC, setInputC]= useState({Name:'', comments:''})
    const {push} = useHistory()
    const history =useHistory()

const submit = (e)=>{
    e.preventDefault()

    axios.post('http://localhost:5002/api/comments', inputC)
   setInputC({Name:'', comments:''})
    push('/')
    history.go()
}

const handleChange = (event) =>{
    const {
        target: { name, value },
      } = event;
      //⬆this is the same as event.target.value\event.target.name
      setInputC({ ...inputC, [name]: value });
}


    return (
        <div className='comments-section'>
            <h2>Comments</h2>
            <Card className='comments'>
            {props.comments.map(comments =>{
                return(
                    <div>
                        <div className='read-comments'>
                            <CardHeader className='comment-name'>
                              Name: {comments.Name}  
                            </CardHeader>
                            <CardBody className='comment-name'>
                              comment: {comments.comments}  
                            </CardBody>
                         </div>
                     <div className='input-comments'>
                        
                     </div>
                    </div>
                )
                })}
            </Card>
            <Form onSubmit ={submit} className='comments-form'>
                <FormGroup>
                <h2>Leave A Comment...</h2>
                <Label className='comments-input-name'>Name</Label>
            <Input
                type='text'
                name='Name'
                placeholder="Type a message"
                value={inputC.Name}
                onChange={handleChange}
            />
            <Label className='comments-input-name'>Comment</Label>
            <Input
                className='comment-story-input'
                type='textarea'
                name='comments'
                placeholder="Type a message"
                value={inputC.comments}
                onChange={handleChange}
            />
            <div></div>
            <Button style={{marginTop:'2%'}} type='submit' value="submit" className='btn1 solid'>Submit</Button>
            </FormGroup>
             </Form>   
            </div>
    )
}

export default CommentsList
