[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/t-ho/mern-stack)](https://gitlab.com/calvin-puram/product-store/-/blob/master/LICENSE)

# App built by:

- Name: Calvin Job Puram
- Email: puram.calvin@gmail.com

### Vuejs - Nuxtjs - NodeJS

A frontend development assesment project

## Demo

![Web App](./client/public/img/rexshop.png)
![Web App](./client/public/img/rexshop2.png)

- Web app [demo](https://getproducts.netlify.app/)
- Dummy accounts:
  - email: `user@test.app` - password: `password`

## Project Breakdown

### 2. Vuejs/Nuxt Client

- Created by using [create-nuxt-app](https://nuxtjs.org/)
- Frontend:
  - [x] Vuex store for state management
  - [x] Capacitorjs - [capacitorjs](https://capacitorjs.com/) to get user geolocation
  - [x] Openweathermap API - [openweathermap](https://openweathermap.org/) to get weather information
  - [ ] Authentication
    - [x] Sign up
    - [x] Login (using facebook, google, email/password)

### 4. Deployment

- App deployed to vercel

## Getting started

### 1. Clone the repository

```bash
git clone https://gitlab.com/calvin-puram/product-store.git
cd usr

# Edit  .env files to meet your requirements: you need an API key from https://openweathermap.org

```

### 2. Install package dependencies

In the `root` directory, run:

```bash
npm install
```

You can start the app with

```bash
npm run dev
```
