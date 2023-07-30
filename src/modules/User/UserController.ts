import express from 'express';
import UserService from './UserService';
const router = express.Router();




router.get('/user', async (req, res) => {
    const data = await UserService.listUserMongoose()
    return res.send({ data })
});






export default [router]