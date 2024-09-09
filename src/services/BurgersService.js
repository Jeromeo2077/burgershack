import { dbContext } from "../db/DbContext.js"

class BurgersService {

  async createBurger(burgerData) {
    try {
      const burger = await dbContext.Burgers.create(burgerData)
      return burger
    } catch (error) {
      error(error)
    }
  }

  async getBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }



}

export const burgersService = new BurgersService()