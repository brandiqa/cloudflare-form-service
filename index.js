addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const json = await request.json()
  const { firstName } = json
  const data = {
    message: `Hello ${firstName}!`,
  }
  return new Response(JSON.stringify(data), {
    headers: { 'content-type': 'text/json' },
  })
}
