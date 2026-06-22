import { ZenStackClient } from '@zenstackhq/orm'
import { PolicyPlugin } from '@zenstackhq/plugin-policy'
import { schema } from '../zenstack/schema'

const baseDb = new ZenStackClient(schema, {
  datasourceUrl: process.env.DATABASE_URL!,
})

export const authDb = baseDb.$use(new PolicyPlugin())