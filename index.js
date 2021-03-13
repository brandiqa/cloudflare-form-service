addEventListener('fetch', event => {
  const request = event.request
  if (request.method === 'POST') {
    event.respondWith(handlePost(request))
  } else {
    event.respondWith(handleRequest(request))
  }
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}

/**
 * Handle JSON POST request
 * @param {Request} request
 */
async function handlePost(request) {
  const json = await request.json()
  const { firstName } = json
  const data = {
    message: `Hello ${firstName}!`,
  }
  return new Response(JSON.stringify(data), {
    headers: { 'content-type': 'text/json' },
  })
}
