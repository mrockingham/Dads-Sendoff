import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CommentsList from './CommentsList'

const Comments = props => {

    const [comments, setComments] = useState([])
    // const [inputC, setInputC]= useState({Name:'', comments:''})

useEffect(()=>{
    axios.get('http://localhost:5002/api/comments')
    .then(res=>{
        console.log(res.data)
        setComments(res.data)
        
    })
    
},[])

    return (
        
        <div>
            <CommentsList key ={comments.id} comments={comments} />
        </div>
    )
}

export default Comments
