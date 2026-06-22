import { createSchemaFactory } from '@zenstackhq/zod'
import { schema } from '~/zenstack/schema'

const factory = createSchemaFactory(schema)

// Create — id/createdAt/updatedAt optional (have @default)
export const storeConfigCreateSchema = factory.makeModelSchema('StoreConfig', {
  optionality: 'defaults',
  omit: { id: true, createdAt: true, updatedAt: true },
})

// Update — everything optional, id required separately
export const storeConfigUpdateSchema = factory.makeModelSchema('StoreConfig', {
  optionality: 'all',
})

// Typed JSON sub-schemas (for use in forms)
export const seoConfigSchema = factory.makeTypeSchema('StoreSeoConfig')
export const marketingConfigSchema = factory.makeTypeSchema('StoreMarketingConfig')

export type StoreConfigCreateInput = Zod.infer<typeof storeConfigCreateSchema>
export type StoreConfigUpdateInput = Zod.infer<typeof storeConfigUpdateSchema>
