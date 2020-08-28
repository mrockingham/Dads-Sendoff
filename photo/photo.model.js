const db = require('../data/db-config')

module.exports={
    find,
    findById,
    add,
    remove
}


function find(){
    return db('gallery')
            .orderBy('created_at')
}

function findById(id){
    return db('gallery')
            .where({id})
            .first()
}

async function add(gallery){
    try{
        const [id] = await db('gallery')
        .insert(gallery, 'id')

        return findById(id)
    } catch(error) {

    }
}


function remove(id){
    return db('gallery')
    .where('id', id)
    .del()
}