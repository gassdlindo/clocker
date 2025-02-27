addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const countryCode = request.cf.country;
  if (countryCode !== 'BR') {
    return Response.redirect('https://www.mercadolivre.com', 302);
  }
  return fetch(request);
}
