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
      body: payload ? JSON.stringify(payload) : undefined,
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
  sl: {name: 'Sleet', src: '../../assets/sleet.png'},
  sn: {name: 'Snow', src: '../../assets/snow.png'},
  h: {name: 'Hail', src: '../../assets/hail.png'},
  t: {name: 'ThunderStorm', src: '../../assets/thunder.png'},
  hr: {name: 'Heavy Rain', src: '../../assets/heavy-rain.png'},
  lr: {name: 'Light Rain', src: '../../assets/light-rain.png'},
  s: {name: 'Shower', src: '../../assets/shower.png'},
  hc: {name: 'Heavy Cloud', src: '../../assets/heavy-cloud.png'},
  lc: {name: 'Light Cloud', src: '../../assets/light-cloud.png'},
}
