const express = require('express');

const comment = require ('./comment-model');


const router = express.Router()

router. get('/', (req,res) =>{
    comment.find()
        .then(comment =>{
           res.status(200).json(comment)
            console.log(comment)

        })
        .catch(err =>{
            res.status(500).json({ message: 'faled to get comment'})
        });
});

router.get('/:id', (req,res)=>{
     const {id} = req.params;

     comment.findById(id)
     .then(comment=> {
        if(comment){
            res.json(comment)
        } else {
            res.status(404).json({message:'could not find comment'})
        }
     })
     .catch(err =>{
         res.status(500).json({message: 'failed to get comments'})
     })
     
})

router.post('/', (req,res)=>{
    comment.add(req.body)
    .then(comment => {
        res.status(201).json(comment)
        console.log(req.body)
    })
    .catch(err =>
        res.status(500).json({message: 'failed to create comment'})
        )
})

router.delete('/:id', (req,res)=>{
    const {id} = req.params;

    comment.remove(id)
    .then(deleted =>{
        if(deleted) {
            res.json({ removed: deleted})
        } else{
            res.status(404).json({message:'could not find comment with given id'});
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'failed to delete comment'})
    })
})

module.exports = router;