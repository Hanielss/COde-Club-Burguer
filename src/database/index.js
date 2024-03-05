import Sequelize from 'sequelize'

import User from '../app/models/User'
import Product from '../app/models/Product'


import configDatabase from '../config/database'

const models = [User, Product]

class Database {

    constructor() {
        this.init()
    }

    init() {
        this.conection = new Sequelize(configDatabase)
        models.map((model) => model.init(this.conection))
    }

}

export default new Database()