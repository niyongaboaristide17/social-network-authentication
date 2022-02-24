import { ProfileService } from "../services/profile.service"
import { UserService } from "../services/user.service"

export class ProfileController {
    static async create(req, res, next){
        try {
            res.status(201).send(await ProfileService.create({...req.body}))
        } catch (error) {
            console.log(error)
            res.status(406).send({error: error.message})
        }
    }
    static async findAll(req, res, next){
        try {
            res.status(200).send(await ProfileService.findAll())
        } catch (error) {
            console.log(error)
            res.status(406).send({error: error.message})
        }
    }

    static async findOne(req, res, next){
        try {
            res.status(200).send(await ProfileService.findOne(req.params.id))
        } catch (error) {
            console.log(error)
            res.status(406).send({error: error.message})
        }
    }
}