export async function onRequest(context) {
  const { request, params } = context;
  const url = new URL(request.url);
  const path = params.path.join('/');
  
  const targetUrl = `https://api.352287.xyz/api/${path}${url.search}`;

  const response = await fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'manual',
  });

  return response;
}