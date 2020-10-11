const Goal = use('App/Models/Goal')

module.exports = async (area, tag) => {
  try{
    const goals = await Goal
      .query()
      .where('area', area)
      .fetch()

      const json = goals.toJSON()

      const res = json.filter(item => item.tags.includes(tag))

    return { status: 200, data: res }
  } catch (err) {
    return { status: 204, data: err }
  }
}
