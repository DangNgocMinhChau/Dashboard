export async function callAPI(url = "", method = "POST", data = {}) {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function callAPIGET(url = "", method = "GET") {
  const response = await fetch(url, {
    method: method,
  });
  return response.json();
}
