import { UserService } from "../services/user.service"

export class UserController {


    static async signup(req, res, next){
        try {
            
            const user = {
                email: req.user.email,
                names: req.user.displayName,
                google_id: req.user.id
            }
            
            res.status(201).send(await UserService.create(user))
        } catch (error) {
            console.log(error)
            res.status(406).send({error: error.message})
        }
    }

    static async create(req, res, next){
        try {
            res.status(201).send(await UserService.create({...req.body}))
        } catch (error) {
            console.log(error)
            res.status(406).send({error: error.message})
        }
    }
    static async findByPk(req, res, next){
        try {
            res.status(201).send(await UserService.findByPk(req.params.pk))
        } catch (error) {
            console.log(error)
            res.status(406).send({error: error.message})
        }
    }
}