const Goal = use('App/Models/Goal')

module.exports = async (id) => {
  const goal = await Goal.findBy('id', id)

  return { status: 200, data: goal }
}
