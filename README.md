# CLOUDFLARE FORM SERVICE

A form handling service built using [Cloudflare Workers](https://workers.cloudflare.com/) for jamstack websites and apps. Read tutorial on [SitePoint](https://www.sitepoint.com/).

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)

## SETUP

### Project Setup

1. Clone this project to your hard drive: `git clone git@github.com:brandiqa/cloudflare-form-service.git`
2. Install package dependencies : `yarn install`

### Cloudflare Workers Setup

Sign up for a new Cloudflare Workers account [here](https://dash.cloudflare.com/sign-up/workers)

```bash
# Install Wrangler/CLI
npm install -g @cloudflare/wrangler

# Confirm installation
wrangler --version

# Login
wrangler login

# Confirm login
wrangler whoami
```

### Acquire SendGrid API Key

After cloning this project to your hard drive, you'll need to [sign up](https://signup.sendgrid.com/) an account with Twilio SendGrid. Once you've completed the verification and sender identity creation process, you'll need an API key which can be created via SendGrid's Web API service.

Once you've acquired your SendGrid's API key, upload it to your wrangler account:

```bash
wrangler secret put <your api key> --env SENDGRID_API
```

## Run App

You can execute the following commands to preview or run a dev server:

```bash
# Preview
yarn preview

# Start dev server
yarn dev
```

## License

SitePoint's code archives and code examples are licensed under the MIT license.

Copyright © 2021 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
