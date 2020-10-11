'use strict'
const { v4: uuidv4 } = require('uuid');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeCreate', async (taskInstance) => {
      taskInstance.id = uuidv4()
    })
  }

  users() {
    this.belongsTo('App/Models/User')
  }

  goals() {
    this.belongsTo('App/Models/Goal')
  }
}

module.exports = Task
