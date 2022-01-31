import {styled} from '../../../stitches.config'

export const Box = styled('main', {
  backgroundColor: '$primaryDark',
  padding: '42px 125px 25px 154px',
})

export const FutureStatsBox = styled('div', {
  display: 'grid',
  gap: '26px',
  // gridTemplateColumns: 'repeat(5)',
})

export const FutureStats = styled('div', {
  backgroundColor: '$primary',
  width: '120px',
  height: '177px',
})

export const PresentStatsBox = styled('div', {
  display: 'flex',
  gap: '48px',
})

export const Title = styled('h1', {
  fontWeight: 700,
  fontSize: '24px',
  marginTop: '72px',
  marginBottom: '32px',
})
