'use strict'
const { v4: uuidv4 } = require('uuid');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Goal extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeCreate', async (userInstance) => {
      userInstance.id = uuidv4()
    })
  }

  users() {
    this.belongsTo('App/Models/User')
  }
}

module.exports = Goal
