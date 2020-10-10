module.exports = async ({ email, password }, auth) => {
  const token = await auth.attempt(email, password)

  return { status: 201, data: token }
}
