import {API} from '../constants'
import {Client, Coords} from '../types/types'

export const client: Client = async (
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

export const weatherMap = {
  sl: {name: 'Sleet', src: ''},
  sn: {name: 'Snow', src: ''},
  h: {name: 'Hail', src: ''},
  t: {name: 'ThunderStorm', src: ''},
  hr: {name: 'Heavy Rain', src: ''},
  lr: {name: 'Light Rain', src: ''},
  s: {name: 'Shower', src: ''},
  hc: {name: 'Heavy Cloud', src: ''},
  lc: {name: 'Light Cloud', src: ''},
}
