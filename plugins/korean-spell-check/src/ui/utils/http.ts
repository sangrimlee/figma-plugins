interface CreateURLOptions {
  /**
   * Apply proxy by `https://corsproxy.io/`
   */
  proxy?: boolean;
  /**
   * `SearchParams` for url
   */
  params?: Record<string, string | number>;
}

function createURL(
  baseUrl: string,
  { proxy = false, params = {} }: CreateURLOptions = {},
) {
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value.toString());
  });
  return proxy ? `https://corsproxy.io/?${url.toString()}` : url;
}

type HttpOptions = RequestInit & CreateURLOptions;

export async function http(
  url: string,
  { params, proxy, ...options }: HttpOptions,
) {
  const response = await fetch(createURL(url, { params, proxy }), options);
  if (!response.ok) {
    throw new Error('NETWORK_REQUEST_FAILED');
  }
  return response;
}
