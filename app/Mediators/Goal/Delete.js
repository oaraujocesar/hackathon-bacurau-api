const Goal = use('App/Models/Goal')

module.exports = async (id) => {
  try {
    const goal = await Goal.findBy('id', id)

    await goal.delete()
  } catch (err) {
    return { status: 404, data: { msg: 'Item does not exists' }}
  }


  return { status: 410 }
}
