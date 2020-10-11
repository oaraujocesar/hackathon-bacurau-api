const Task = use('App/Models/Task')

module.exports = async ({ title, estimate, area, goalId }, id) => {
  const task = await Task.create({
    title,
    estimate,
    area,
    user_id: id,
    goal_id: goalId
  })

  return { status: 201, data: task }
}
