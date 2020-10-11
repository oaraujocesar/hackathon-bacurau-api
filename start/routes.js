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
  Route.delete('/:id', 'GoalController.delete')
  Route.put('show/:id', 'GoalController.update')
  Route.get('tags/show', 'GoalController.search')//listar por tag
  Route.get('show/:id', 'GoalController.show')//listar um
  Route.get('self/:user_id', 'GoalController.indexSelf')
  Route.get('/', 'GoalController.index')//listar por area
}).prefix('v1/client/goals').middleware('auth')

Route.group(() => {

}).prefix('v1/client/goals').middleware('auth')

Route.group(() => {
  Route.get('/', 'CommentController.index')
  Route.post('/new', 'CommentController.store')
  Route.patch('/:id', 'CommentController.update')
  Route.delete('/:id', 'CommentController.delete')
}).prefix('v1/client/comments').middleware('auth')

Route.group(() => {
  Route.get('/', 'TaskController.index')
  Route.post('/new', 'TaskController.store')
  // Route.patch('/:id', 'TaskController.update')
  // Route.delete('/:id', 'TaskController.delete')
}).prefix('v1/client/tasks').middleware('auth')
