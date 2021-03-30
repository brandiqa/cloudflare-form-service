import validate from './validator'
import sendMail from './email-service'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Max-Age': '86400',
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(request))
})

async function handleRequest(request) {
  if (request.method === 'POST') {
    return handlePostRequest(request)
  } else if (request.method === 'OPTIONS') {
    return new Response('OK', { headers: corsHeaders })
  } else {
    return new Response('Object Not Found', {
      statusText: 'Object Not Found',
      status: 404,
    })
  }
}

/**
 * Return body data in JSON format
 * @param {Request} request
 */
async function readRequestBody(request) {
  const { headers } = request
  const contentType = headers.get('content-type')
  if (!contentType) {
    throw 'Content type has not been set!'
  }
  if (contentType.includes('application/json')) {
    const body = await request.json()
    return body
  } else if (contentType.includes('form')) {
    const formData = await request.formData()
    let body = {}
    for (let entry of formData.entries()) {
      body[entry[0]] = entry[1]
    }
    return JSON.stringify(body)
  } else {
    throw 'Content type not recognized!'
  }
}

/**
 * Handle JSON POST request
 * @param {Request} request
 */
async function handlePostRequest(request) {
  let json

  try {
    json = await readRequestBody(request)
  } catch (error) {
    return new Response(error, {
      headers: { 'content-type': 'text/plain', ...corsHeaders },
      statusText: error,
      status: 500,
    })
  }

  // Validate json inputs
  const results = validate(json)
  // Return 400 Error Response for invalid post request
  if (!results.valid) {
    return new Response(JSON.stringify(results), {
      headers: { 'content-type': 'text/json', ...corsHeaders },
      status: 400,
    })
  }

  try {
    const result = await sendMail(json)
    if (result.status == 200) {
      return new Response(
        JSON.stringify({ message: 'Message succesfully sent' }),
        {
          headers: { 'content-type': 'text/json', ...corsHeaders },
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
