const REQUEST_TIMEOUT_MS = 8000;

export async function fetchFromFakeStoreApi<T>(path: string): Promise<T> {
  const { fakeStoreApiBaseUrl } = useRuntimeConfig();

  try {
    const data = await $fetch(`${fakeStoreApiBaseUrl}${path}`, {
      timeout: REQUEST_TIMEOUT_MS,
    });
    return data as T;
  } catch (error) {
    const upstreamStatus = (error as { statusCode?: number }).statusCode;

    if (upstreamStatus === 404) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      });
    }

    throw createError({
      statusCode: 502,
      statusMessage: "Failed to reach product service",
    });
  }
}
