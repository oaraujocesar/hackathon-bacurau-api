'use strict'
const { v4: uuidv4 } = require('uuid');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Goal extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeCreate', async (goalInstance) => {
      goalInstance.id = uuidv4()
    })
  }

  static get hidden () {
    return ['password']
  }

  users() {
    this.belongsTo('App/Models/User')
  }

  tasks() {
    this.belongsTo('App/Models/Task')
  }

  comments() {
    this.hasMany('App/Models/Comment')
  }
}

module.exports = Goal
