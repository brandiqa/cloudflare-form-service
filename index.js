import validate from './validator'

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

  // Validate json inputs
  const results = validate(json)

  // Return 400 Error Response for invalid inputs
  if (!results.valid) {
    return new Response(JSON.stringify(results), {
      headers: { 'content-type': 'text/json' },
      status: 400,
    })
  }

  const { firstName } = json
  const data = {
    message: `Hello ${firstName}!`,
  }
  return new Response(JSON.stringify(data), {
    headers: { 'content-type': 'text/json' },
  })
}
