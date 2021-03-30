# CLOUDFLARE FORM SERVICE

A form handling service built using [Cloudflare Workers](https://workers.cloudflare.com/) for jamstack websites and apps. See [Cloudflare Form UI](https://github.com/brandiqa/cloudflare-form-ui) project.

Read tutorial on [SitePoint](https://www.sitepoint.com/).

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension
- [Mailgun](https://www.mailgun.com/) account
- [Cloudflare Workers](https://workers.cloudflare.com/) account
- [Wrangler CLI](https://www.npmjs.com/package/@cloudflare/wrangler)

## Setup and Deploy

```bash
# Install package dependencies
npm install

# Set up environment variables
wrangler secret put TO_EMAIL_ADDRESS --env production
wrangler secret put FROM_EMAIL_ADDRESS --env production
wrangler secret put MAILGUN_API_KEY --env production
wrangler secret put MAILGUN_API_BASE_URL --env production

# deploy
wrangler publish -e production
```

## License

SitePoint's code archives and code examples are licensed under the MIT license.

Copyright © 2021 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
