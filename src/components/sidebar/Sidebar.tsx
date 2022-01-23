import React from 'react'
import {LeftBox, Flex, SearchButton} from './sidebar.css'
import {MdMyLocation} from 'react-icons/md'

export default function Sidebar() {
  return (
    <LeftBox>
      <Flex variant="wide">
        <SearchButton>Search for places</SearchButton>
        <MdMyLocation className="location" size="22px" />
      </Flex>
    </LeftBox>
  )
}
