'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GoalsSchema extends Schema {
  up () {
    this.create('goals', (table) => {
      table.uuid('id').primary()
      table.uuid('user_id').unsigned().references('id').inTable('users')
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.boolean('public').defaultTo(false)
      table.specificType('tags', 'text ARRAY').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('goals')
  }
}

module.exports = GoalsSchema
