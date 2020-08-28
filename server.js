const express = require('express')
const cors = require('cors')

const morgan = require('morgan')
const {cloudinary} = require('./utils/cloudinary')
const commentrouter = require('./comment/comment-router')
const storiesrouter = require('./stories/stories.router')
const galleryrouter = require('./photo/photo.router')
const server = express()

server.options('*', cors())
server.use(cors());

server.use(express.json({ limit: '50mb'}));
server.use(morgan('dev'))
server.use(express.urlencoded({limit: '50mb', extended: true}))

server.use('/api/comments', commentrouter)
server.use('/api/stories', storiesrouter)
server.use('/api/gallery', galleryrouter)

server.options('/api/images', cors())
server .get('/', (req, res) =>{
    res.send('server is up')
})


server.options('/api/images', cors())
server.get('/api/images', async (req,res)=>{
    const {resources} = await cloudinary.search.expression
    ('folder:mike')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute()
    const publicIDs = resources.map( file => file.public_id)
    res.send(publicIDs)
})
server.options('/api/upload', cors())
server.post('/api/upload', async (req,res)=>{
    try {
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr,
            {upload_preset:'dadsendoff'})
        console.log(uploadedResponse)
        res.json({msg:'image uploaded'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'failed to upload'})
    }
})





module.exports = server