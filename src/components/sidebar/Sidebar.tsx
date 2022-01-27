import * as React from 'react'
import {LeftBox, Flex, SearchButton} from './sidebar.css'
import {MdMyLocation} from 'react-icons/md'
import {getGeoLocation} from '../../utils'

export default function Sidebar() {
  const [location, setLocation] = React.useState<any>(null)

  const handleGetLocation = () => {
    setLocation(getGeoLocation())
  }

  console.log(location)
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
    </LeftBox>
  )
}
