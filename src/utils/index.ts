import {ClientOptions, Coords} from '../types/types'

export const API = 'https://www.metaweather.com/api'

export const client = async (
  endpoint: string,
  {method = 'GET', payload, headers = {}}: ClientOptions,
) => {
  return await (
    await fetch(API + endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(payload ?? {}),
    })
  ).json()
}

export const getLocation: () => Coords = () => {
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
