import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { v4 as uuid4 } from 'uuid'
import {
  column,
  beforeSave,
  BaseModel,
  beforeCreate,
} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public email: string

  @column()
  public name: string

  @column()
  public bio?: string

  @column()
  public avatar?: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @beforeCreate()
  public static createId (user: User) {
    user.id = uuid4()
  }

  @beforeSave()
  public static setAvatar (user: User) {
    const avatar = user.name.replace(' ', '')

    user.avatar = `https://api.adorable.io/avatars/285/${avatar}.png`
  }
}
