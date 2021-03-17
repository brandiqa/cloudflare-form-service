const template = data => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Email Template</title>
      <link
        rel="stylesheet"
        href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
      />
      <style>
        body {
          background: #eee;
          color: #111827;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: sans-serif;
        }
        div.container {
          background: #f9fafb;
          border-radius: 1rem;
          padding: 4rem;
        }
        .inline {
          display: flex;
          margin-top: 1.2rem;
        }
        .field {
          margin-bottom: 1rem;
        }
        .label {
          color: #374151;
          font-weight: bold;
        }
        .value {
          color: #374151;
          font-family: 'Courier New', Courier, monospace;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Online Guest Book Contact</h1>
        <div class="inline">
          <div class="field">
            <div class="label">First Name</div>
            <div class="value">${data.firstName}</div>
          </div>
          <div class="field" style="margin-left:2rem">
            <div class="label">Last Name</div>
            <div class="value">${data.lastName}</div>
          </div>
        </div>
        <div class="field">
          <div class="label">Email</div>
          <div class="value">${data.email}</div>
        </div>
        <div class="field">
          <div class="label">Message</div>
          <div class="value">${data.message}</div>
        </div>
        <div class="field">
          <div class="label">Subscribed</div>
          <div class="value">${data.subscribed ? 'Yes' : 'No'}</div>
        </div>
      </div>
    </body>
  </html>
`
}

export default template
