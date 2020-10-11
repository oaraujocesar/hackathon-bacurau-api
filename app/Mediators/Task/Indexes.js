const Database = use('Database')

module.exports = async (area) => {
  try{
    const tasks = await Database
      .from('users')
      .where('area', area)
      .innerJoin('goals', 'goals.user_id', 'users.id')

    return { status: 200, data: tasks }
  } catch (err) {
    return { status: 204, data: err }
  }
}
