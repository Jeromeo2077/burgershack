import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers');
    this.router
      .get('/Test', this.getTest)
  }

  async getTest(request, response, next) {
    try {
      response.send('Test Successful!')
    } catch (error) {
      next(error)
    }
  }
}