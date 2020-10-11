'use strict'
const { v4: uuidv4 } = require('uuid');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeCreate', async (commentInstance) => {
      commentInstance.id = uuidv4()
    })
  }

  goals() {
    this.belongsTo('App/Models/Goal')
  }

  users() {
    this.belongsTo('App/Models/User')
  }
}

module.exports = Comment
