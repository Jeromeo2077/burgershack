import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super();
    this.router
      .get('Test',)
  }

  async getTest(request, response, next) {
    try {
      response.send('Test Successful!')
    } catch (error) {
      next(error)
    }
  }
}