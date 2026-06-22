import { authDb } from './db'

export function getDb(medusaStoreId: string) {
  return authDb.$setAuth({ medusaStoreId })
}

export function getDbFromRequest(request: Request) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  if (!token) throw new Error('Unauthorized')

  // Your existing util — decode Medusa JWT and pull store_id
  const { store_id } = decodeMedusaToken(token)
  return getDb(store_id)
}