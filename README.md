# CLOUDFLARE FORM SERVICE

A form handling service built using [Cloudflare Workers](https://workers.cloudflare.com/) for jamstack websites and apps. Read tutorial on [SitePoint](https://www.sitepoint.com/).

## PREQUISITES

- Node.js
- Yarn

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

## RUN

You can execute the following commands to preview or run a dev server:

```bash
# Preview
yarn preview

# Start dev server
yarn dev
```
