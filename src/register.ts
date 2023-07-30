import BookController from "./modules/Book/BookController";
import UserController from "./modules/User/UserController";


/**
 * Registered modules controller
 */
export default [
    ...BookController,
    ...UserController
]