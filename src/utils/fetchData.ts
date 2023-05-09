type Parameters = { [key: string]: string | undefined };

const fetchData = async (
  url: string,
  options?: RequestInit & { params?: Parameters }
) => {
  if (!url) return;

  let _url = url;

  if (options?.params && options?.method === "GET") {
    const _params: Parameters = {};

    for (const [key, value] of Object.entries(options.params)) {
      const param = options.params[key];

      if (param !== undefined) {
        _params[key] = value;
      }
    }
    if (Object.keys(_params).length) {
      // @ts-ignore
      _url += "?" + new URLSearchParams(_params).toString();
    }
  }

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Request-Method": options?.method || "POST",
    "Access-Control-Request-Headers": "Content-Type",
    ...options?.headers,
  };

  try {
    const response = await fetch(_url, { mode: "cors", ...options, headers });
    const data = response.headers
      .get("Content-Type")
      ?.includes("application/json")
      ? await response.json()
      : await response.text();

    if (response.ok) {
      return data;
    } else {
      // @ts-ignore
      throw new Error(
        `Fetch failed with (${response.status}): ${
          typeof data === "string" ? data : JSON.stringify(data, null, 2)
        }`
      );
    }
  } catch (error) {
    // @ts-ignore
    console.log(error);
  }
};

export { fetchData };
