import template from './template'
import validate from './validator'
import sendMail from './email-service'

addEventListener('fetch', event => {
  const request = event.request
  if (request.method === 'POST') {
    event.respondWith(handlePost(request))
  } else if (request.method === 'GET') {
    event.respondWith(handleRequest(request))
  }
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response(template(), {
    headers: { 'content-type': 'text/html' },
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

  try {
    const result = await sendMail(json)
    if (result.status == 200) {
      return new Response(
        JSON.stringify({ message: 'Message succesfully sent' }),
        {
          headers: { 'content-type': 'text/json' },
        },
      )
    } else {
      return new Response(
        JSON.stringify({ message: 'Message submission failed!', result }),
        {
          headers: { 'content-type': 'text/json' },
          status: 400,
        },
      )
    }
  } catch (error) {
    return new Response(error, {
      headers: { 'content-type': 'text/plain' },
      statusText: 'An error occurred',
      status: 500,
    })
  }
}
