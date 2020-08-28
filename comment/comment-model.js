const db = require('../data/db-config')

module.exports={
    find,
    findById,
    add,
    remove
}


function find(){
    return db('comment')
            
}

function findById(id){
    return db('comment')
            .where({id})
            .first()
}

async function add(comment){
    try{
        const [id] = await db('comment')
        .insert(comment, 'id')

        return findById(id)
    } catch(error) {

    }
}


function remove(id){
    return db('comment')
    .where('id', id)
    .del()
}