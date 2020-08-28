const express = require('express')

const gallery = require ('./photo.model')


const router = express.Router()


router. get('/', (req,res) =>{
    gallery.find()
        .then(gallery =>{
            res.json(gallery)

        })
        .catch(err =>{
            res.status(500).json({ message: 'faled to get gallery'})
        });
});

router.get('/', (req,res)=>{
     const {id} = req.params;

     gallery.findById(id)
     .then(gallery=> {
        if(gallery){
            res.json(gallery)
        } else {
            res.status(404).json({message:'could not find gallery'})
        }
     })
     .catch(err =>{
         res.status(500).json({message: 'failed to get comments'})
     })
     
})

router.post('/', (req,res)=>{
    const commentData = req.body;

    gallery.add(commentData)
    .then(gallery => {
        res.status(201).json(gallery)
    })
    .catch(err =>
        res.status(500).json({message: 'failed to create gallery'})
        )
})


router.delete('/:id', (req,res)=>{
    const {id} = req.params;

    gallery.remove(id)
    .then(deleted =>{
        if(deleted) {
            res.json({ removed: deleted})
        } else{
            res.status(404).json({message:'could not find gallery with given id'});
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'failed to delete gallery'})
    })
})

module.exports = router;