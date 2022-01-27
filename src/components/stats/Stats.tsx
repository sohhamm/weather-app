import React from 'react'
import {Scale} from '../../types/types'
import {Box, FutureStats, FutureStatsBox, Title} from './stats.css'

export default function Stats() {
  const [scale, setScale] = React.useState<Scale>('c')
  return (
    <Box>
      <div>C F</div>
      <FutureStatsBox>{}</FutureStatsBox>
      <Title>Heading</Title>
    </Box>
  )
}
