'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.uuid('id').primary()
      table.uuid('user_id').unsigned().references('id').inTable('users')
      table.uuid('goal_id').unsigned().references('id').inTable('goals')
      table.string('title').notNullable()
      table.string('estimate').notNullable()
      table.string('area').notNullable()
      table.string('finished').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
