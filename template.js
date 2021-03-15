const template = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cloudflare Form Service</title>
        <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
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
              background: #F9FAFB;
              border-radius: 1rem;
              padding: 4rem;
            }
            p {
              color: #374151;
            }
          </style>
      </head>
      <body>
        <div class="container">
          <h1>Hello worker! This is Cloudflare Form Service.</h1>
          <p>Use POST command to send form data in JSON format</p>
          </div>
      </body>
    </html>
  `
}

export default template
