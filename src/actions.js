
import { CALL_FIREUSER, Schemas } from './middleware'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export function login (loginData) {
  return {
    [CALL_FIREUSER]: {
      types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ],
      method: 'login',
      callData: loginData,
      schema: Schemas.ACCOUNT
    }
  }
}

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export function signup (signupData) {
  return {
    [CALL_FIREUSER]: {
      types: [ SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE ],
      method: 'signup',
      callData: signupData,
      schema: Schemas.ACCOUNT
    }
  }
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export function logout () {
  return {
    [CALL_FIREUSER]: {
      types: [ LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE ],
      method: 'logout',
      schema: Schemas.ACCOUNT
    }
  }
}
