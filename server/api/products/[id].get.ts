export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id || !/^\d+$/.test(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid product id' })
  }

  const { fakeStoreApiBaseUrl } = useRuntimeConfig()

  return $fetch(`${fakeStoreApiBaseUrl}/products/${id}`)
})
