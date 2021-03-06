'use strict'
const { v4: uuidv4 } = require('uuid');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.name) {
        const name = userInstance.name
        const last = userInstance.last
        userInstance.avatar = `https://api.adorable.io/avatars/285/${name}-${last}.png`
      }
    })

    this.addHook('beforeCreate', async (userInstance) => {
      userInstance.id = uuidv4()
    })
  }

  static get hidden () {
    return ['password']
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  goals() {
    return this.hasMany('App/Models/Goal')
  }

  tasks() {
    return this.hasMany('App/Models/Task')
  }

  comments() {
    return this.hasMany('App/Models/Comment')
  }
}

module.exports = User
