/**
 * import package
 */
import express from "express";
import { config } from 'dotenv';
import routes from "./src/register";


/**
 * init package 
 */
const server = express()
config()


/**
 * register plugin
 */
server.use(express.static(__dirname))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))


/**
 * register route
 */
server.use(routes)


/**
 * handle route doesn't exist
 */
server.use('/', (_, res) => {
    return res.status(404).json({
        'message': 'Endpoint not found'
    });
})


/**
 * start server
 */
const port = Number((process.env.PORT) ?? 8000)
server.listen(
    port,
    () => console.log(`Server Running at http://localhost:${port}`)
);