export async function request(
  url,
  options = {}
) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      throw Object.assign(error, { response });
    }

    if (response.status === 204) {
      return;
    }

    const contentType = response.headers.get('Content-Type');
    const isJsonResponse = contentType && contentType.includes('application/json');

    if (!isJsonResponse) {
      return response ;
    }

    const responseData = (await response.json());
    return responseData;
  } catch (error) {
    console.log(error);
  }
}
