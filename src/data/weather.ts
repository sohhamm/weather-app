import * as React from 'react'
import {client} from '../utils'
import {BANGALORE_WOEID} from '../constants'

export default function useWeather(woeid: number = BANGALORE_WOEID) {
  const [weather, setWeather] = React.useState<any[] | null>(null)
  const [fetchingWeather, setFetchingWeather] = React.useState(false)

  React.useEffect(() => {
    setFetchingWeather(true)
    client(`/location/${woeid}`).then(res => setWeather(res))
    setFetchingWeather(false)
    // setFetchingWeather(false)
  }, [])

  return {weather, fetchingWeather}
}
