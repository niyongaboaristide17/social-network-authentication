import express from 'express'
import cors from "cors";
import routes from "./routes"
import morgan from 'morgan'
import path from 'path'
import passport from 'passport';
import session from 'express-session'

require('./middlewares/auth')

const app = express()



const server = () => {

    app.set('views', path.join(__dirname,'views'))
    app.set('view engine', 'ejs')

    app.use(express.json());
    app.use(cors());
    app.use(morgan('combined'));

    app.use(session({ secret: "cats", resave: false, saveUninitialized: true }))

    app.use(passport.initialize())
    app.use(passport.session())

    app.get('/', (req, res)=>{
        res.render('home')
    })
    app.use('/api/v1', routes )

    app.listen(3000,()=>{
        console.log('Server running on port 3000');
    })

}

server()

export default app