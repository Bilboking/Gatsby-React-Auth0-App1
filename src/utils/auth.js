import auth0 from "auth0-js";


// dotenv.config()

export const isBrowser = typeof window !== 'undefined';

// Only instantiate Auth0 if we’re in the browser.
const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
    //   audience: process.env.AUTH0_AUDIENCE,
      responseType: 'token id_token',
      scope: 'openid profile email'
    })
  : {};

export const login = () => {
    auth.authorize()
}

