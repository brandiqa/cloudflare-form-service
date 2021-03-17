import htmlTemplate from './email-html-template.js'
import textTemplate from './email-text-template.js'

function urlEncodeObject(obj) {
  return Object.keys(obj)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
    .join('&')
}

function sendMail(json) {
  const data = {
    to: TO_EMAIL_ADDRESS,
    from: FROM_EMAIL_ADDRESS,
    subject: 'New Contact: Online Guest Book',
    text: textTemplate(json),
    html: htmlTemplate(json),
  }

  const dataUrlEncoded = urlEncodeObject(data)
  const opts = {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + btoa('api:' + MAILGUN_API_KEY),
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': dataUrlEncoded.length.toString(),
    },
    body: dataUrlEncoded,
  }

  return fetch(`${MAILGUN_API_BASE_URL}/messages`, opts)
}

export default sendMail
