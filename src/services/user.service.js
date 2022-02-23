import db from "../models"

export class UserService{

    static async create(data){
        return await db.User.create(data)
    }
    static async findByPk(pk){
        return await db.User.findByPk(pk)
    }
    
}