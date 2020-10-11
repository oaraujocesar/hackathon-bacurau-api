const Task = use('App/Models/Task')

module.exports = async (id) => {
  try {
    const task = await Task.findBy('id', id)

    await task.delete()
  } catch (err) {
    return { status: 404, data: { msg: 'Item does not exists' }}
  }


  return { status: 410 }
}
