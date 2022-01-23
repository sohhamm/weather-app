import React from 'react'
import {LeftBox, Flex, SearchButton} from './sidebar.css'

export default function Sidebar() {
  return (
    <LeftBox>
      <Flex>
        <SearchButton />
      </Flex>
    </LeftBox>
  )
}
