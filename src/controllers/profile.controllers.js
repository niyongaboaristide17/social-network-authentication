import { ProfileService } from "../services/profile.service"
import { UserService } from "../services/user.service"

export class ProfileController {
    static async create(req, res, next){
        try {
            const user = {...req.body.user}
            const profile = {...req.body}
            delete profile.user
            const createUser = await UserService.create(user)
            profile['userId'] = createUser.id
            res.status(201).send(await ProfileService.create(profile))
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