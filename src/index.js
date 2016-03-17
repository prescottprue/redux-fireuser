import Middleware from './middleware'

let fireuser

export function createMiddleware(name) {
  fireuser = new Fireuser(name)
  // Return middleware (which imports the new fireuser instance)
  return Middleware
}

// Export fireuser instance
export function getFireuser() {
  return fireuser
}

export * as Reducers from './reducers'
export * as Actions from './actions'
