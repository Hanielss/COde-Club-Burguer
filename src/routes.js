import { Router } from "express";
import multer from 'multer'
import multerConfig from './config/multer'


import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";
import CategoryController from "./app/controllers/CategoryController";

import authMiddleware from './app/middlewares/auth'


const upload = multer(multerConfig)

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/products', upload.single('file'), ProductController.store)
routes.post('/products', ProductController.index)

routes.get('/categories', CategoryController.store)
routes.post('/categories', CategoryController.index)



export default routes
