const express = require('express');

const stories = require ('./stories.model');


const router = express.Router()

router. get('/', (req,res) =>{
    stories.find()
        .then(stories =>{
            res.json(stories)

        })
        .catch(err =>{
            res.status(500).json({ message: 'faled to get stories'})
        });
});

router.get('/', (req,res)=>{
     const {id} = req.params;

     stories.findById(id)
     .then(stories=> {
        if(stories){
            res.json(stories)
        } else {
            res.status(404).json({message:'could not find stories'})
        }
     })
     .catch(err =>{
         res.status(500).json({message: 'failed to get comments'})
     })
     
})

router.post('/', (req,res)=>{
    const commentData = req.body;

    stories.add(commentData)
    .then(stories => {
        res.status(201).json(stories)
    })
    .catch(err =>
        res.status(500).json({message: 'failed to create stories'})
        )
})

router.delete('/:id', (req,res)=>{
    const {id} = req.params;

    stories.remove(id)
    .then(deleted =>{
        if(deleted) {
            res.json({ removed: deleted})
        } else{
            res.status(404).json({message:'could not find stories with given id'});
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'failed to delete stories'})
    })
})

module.exports = router;