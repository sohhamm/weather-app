import {API} from '../constants'
import {ClientOptions, Coords} from '../types/types'

export const client: TClient = async (
  endpoint,
  {method = 'GET', payload, headers = {}} = {},
) => {
  return await (
    await fetch(API + endpoint, {
      method: method,
      headers: {
        'Content-Type': payload ? 'application/json' : '',
        ...headers,
      },
      body: JSON.stringify(payload ?? {}),
    })
  ).json()
}

export const getGeoLocation: () => Coords = () => {
  let coords: Coords = {latitude: null, longitude: null}

  navigator.geolocation.getCurrentPosition(
    ({coords: {latitude, longitude}}) => {
      coords.latitude = latitude
      coords.longitude = longitude
    },
    () => null,
  )
  return coords
}

type TClient = (endpoint: string, options?: ClientOptions) => Promise<any[]>
