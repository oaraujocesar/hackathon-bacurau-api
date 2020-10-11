const Task = use('App/Models/Task')

module.exports = async (id) => {
  try{
    const tasks = await Task.query().where('id', id).fetch()

    return { status: 200, data: tasks }
  } catch (err) {
    return { status: 204, data: err }
  }

}
