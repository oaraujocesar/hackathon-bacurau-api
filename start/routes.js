'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('signin', 'AuthController.signin')
  Route.post('signon', 'AuthController.store')
}).prefix('v1/client/auth')

Route.group(() => {
  Route.get('show/:id', 'UserController.show')
  Route.patch('update/:id', 'UserController.update')
}).prefix('v1/client/profile').middleware('auth')

Route.group(() => {
  Route.post('new', 'GoalController.store')
  Route.get('show/:id', 'GoalController.show')
  Route.put('show/:id', 'GoalController.update')
  Route.delete('show/:id', 'GoalController.delete')
  Route.get('show/tags', 'GoalController.search')
  Route.get('/', 'GoalController.index')
}).prefix('v1/client/goals').middleware('auth')
