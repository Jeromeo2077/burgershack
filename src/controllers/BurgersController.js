import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers');
    this.router
      .get('', this.getBurgers)
      .post('', this.createBurger)
  }

  async getBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }


  async createBurger(request, response, next) {
    try {
      const burgerData = request.body
      const burger = await burgersService.createBurger(burgerData)
      response.send(burger)
    } catch (error) {
      next(error)
    }
  }
}