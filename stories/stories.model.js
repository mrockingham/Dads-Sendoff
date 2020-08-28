const db = require('../data/db-config')

module.exports={
    find,
    findById,
    add,
    remove
}


function find(){
    return db('sharables')
            .orderBy('created_at')
}

function findById(id){
    return db('sharables')
            .where({id})
            .first()
}

async function add(sharables){
    try{
        const [id] = await db('sharables')
        .insert(sharables, 'id')

        return findById(id)
    } catch(error) {

    }
}


function remove(id){
    return db('sharables')
    .where('id', id)
    .del()
}