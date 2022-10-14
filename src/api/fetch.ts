type HTTPMethod = "GET" | "POST";

type Params = { [key: string]: string };

type JSONPossiblePrimitives = boolean | string | number;
type ParsedJSON = {
  [key: string]: JSONPossiblePrimitives | JSONPossiblePrimitives[] | ParsedJSON[];
};

export async function fetchWrapper<ResponseType extends ParsedJSON>(
  url: string,
  method: HTTPMethod,
  options?: {
    params?: Params;
  },
): Promise<ResponseType> {
  const formData = new FormData();
  if (options?.params) {
    Object.keys(options.params).forEach(key => {
      formData.set(key, (options.params as Params)[key]);
    });
  }

  const requestInit: RequestInit = {
    method: method,
  };

  if (options?.params) {
    requestInit.body = formData;
  }

  const response = await fetch(url, requestInit);
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (e: unknown) {
    throw new Error(`Can not parse response as JSON when requesting ${url}`);
  }
}

export function get<ResponseType extends ParsedJSON>(url: string): Promise<ResponseType> {
  return fetchWrapper<ResponseType>(url, "GET");
}
