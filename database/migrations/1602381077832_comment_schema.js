'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.uuid('id').primary()
      table.uuid('goal_id').unsigned().references('id').inTable('goals').onDelete('CASCADE').notNullable()
      table.uuid('user_id').unsigned().references('id').inTable('users').notNullable()
      table.string('content').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentSchema
