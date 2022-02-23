import express from 'express'
import cors from "cors";
import routes from "./routes"
import morgan from 'morgan'

const app = express()

const server = () => {

    app.use(express.json());
    app.use(cors());
    app.use(morgan('combined'));

    app.get('/', (req, res)=>{
        res.send({
            messege: 'Woooowww'
        })
    })
    app.use('/api/v1', routes )

    app.listen(3000,()=>{
        console.log('Server running');
    })

}

server()

export default app