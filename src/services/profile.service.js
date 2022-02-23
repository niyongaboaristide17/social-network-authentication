import db from "../models"

export class ProfileService{

    static async create(data){
        return await db.Profile.create(data)
    }
    static async findAll(){
        return await db.Profile.findAll({
            include: [{model: db.User, as: 'user'}]
        })
    }
    static async findOne(id){
        return await db.Profile.findOne({
            where: {
                id,
            }, include: [{model: db.User, as: 'user'}]
        })
    }
    
}