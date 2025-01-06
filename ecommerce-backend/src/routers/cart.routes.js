import Router from 'express'
import {verifyJwt} from '../middlewares/auth.middleware.js'
import { addToCart, getCart, removeFromCart } from '../controllers/carts.controller.js'
const cart = Router()

cart.route('/')
  .get(verifyJwt, getCart)
  .put(verifyJwt, addToCart)
  .delete(verifyJwt, removeFromCart)
  
export default cart
