import express from 'express';
import BookService from './BookService';
const commonRouter = express.Router();




commonRouter.get('/book', (req, res) => {
    const data = BookService.responseListBook()
    return res.send({ data })
});






export default [commonRouter]