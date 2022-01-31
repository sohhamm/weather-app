import * as React from 'react'
import {LeftBox, Flex, SearchButton, Image, Text} from './sidebar.css'
import {MdMyLocation} from 'react-icons/md'
import {getGeoLocation, weatherMap} from '../../utils'
import {AbbrTypes} from '../../types/types'

interface SidebarProps {
  weather: WeatherObj | null
  fetchingWeather: boolean
  place: string
}

interface WeatherObj {
  weather_state_name: string
  weather_state_abbr: AbbrTypes
  applicable_date: string
  the_temp: number
}

export default function Sidebar({
  weather,
  fetchingWeather,
  place,
}: SidebarProps) {
  const [location, setLocation] = React.useState<any>(null)

  const handleGetLocation = () => {
    setLocation(getGeoLocation())
  }

  if (fetchingWeather) return <LeftBox>Loading...</LeftBox>
  if (!weather) return <LeftBox>Error...</LeftBox>

  const abbr = weather.weather_state_abbr

  return (
    <LeftBox>
      <Flex variant="wide">
        <SearchButton>Search for places</SearchButton>
        <MdMyLocation
          className="location"
          size="22px"
          onClick={handleGetLocation}
        />
      </Flex>
      <Flex variant="center">
        <Image src={weatherMap[abbr].src} />
      </Flex>

      <Flex variant="center">
        <Text>{weather.the_temp}</Text>
      </Flex>

      <Flex variant="center">
        <Text>{weather.weather_state_name}</Text>
      </Flex>

      <Flex variant="center">
        <Text>{weather.applicable_date}</Text>
      </Flex>

      <Flex variant="center">
        <Text>{place}</Text>
      </Flex>
    </LeftBox>
  )
}
