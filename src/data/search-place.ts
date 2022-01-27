import * as React from 'react'
import {client} from '../utils'

// add throttle or debounce
export default function useSearchPlace(query: string) {
  const [place, setPlace] = React.useState<any[] | null>(null)
  const [fetchingPlace, setFetchingPlace] = React.useState(false)

  React.useEffect(() => {
    setFetchingPlace(true)
    client(`/location/search/?query=${query}`).then(res => setPlace(res))
    setFetchingPlace(false)
    // return () => {
    //   setFetchingPlace(false)
    // }
  }, [])

  return {place, fetchingPlace}
}
