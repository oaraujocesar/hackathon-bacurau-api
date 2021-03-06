const Goal = use('App/Models/Goal')

module.exports = async ({ title, description, tags, public, area }, id) => {
  const tagsFiltered = tags.replace(/[|#&;$%@"<> ()+]/g, "").split(',')

  const goal = await Goal.create({
    title,
    description,
    tags: tagsFiltered,
    public,
    area,
    user_id: id
  })

  return { status: 201, data: goal }
}
