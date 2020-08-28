import React, {useState,} from 'react'
import axios from 'axios'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText} from 'reactstrap';

const Gallery = (props) => {

    const [fileInputState, setFileInputState] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [previewSource, setPreviewSource] = useState('')

    
    const handleFileInputChange = (e) =>{
        const file = e.target.files[0]
        previewFile(file)
    }

    const previewFile = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=>{
            setPreviewSource(reader.result)
        }
    }

    const handleSubmitFile = (e)=>{
        console.log('submitting')
        e.preventDefault()

        if(!previewSource) return
        uploadImage(previewSource)
    }

    const uploadImage = async (base64EncodedImage) =>{
       console.log(base64EncodedImage) 
       try {
           await fetch ('http://localhost:5002/api/upload', {
           method:'POST',    
           body: JSON.stringify({data:
            base64EncodedImage}),
            headers: {'Content-type': 'application/json'},   
           })
       } catch (error) {
           console.error(error)
           
       }
    }
    

    return (
        <div>
            <h1>Upload</h1>
                <form onSubmit={handleSubmitFile} >
                    <input type='file'  
                    name='image' 
                    onChange={handleFileInputChange}
                    value={fileInputState}    
                    className='form-input' />
                    <Button style={{marginTop: '2%'}} className='btn' type='submit'>Submit</Button>
                </form>           
                {previewSource && (
                    <img src={previewSource} alt="chosen"
                    style={{height:'300px'}}/>
                )}             
        </div>
    )
}

export default Gallery
