import {styled} from '../../../stitches.config'
import bgPath from '../../assets/cloud-bg.png'

console.log(bgPath)

export const LeftBox = styled('div', {
  padding: '42px 46px 52px 46px',
  backgroundColor: '$primary',
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${bgPath})`,
  backgroundPosition: '0% 20%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
})

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const SearchButton = styled('button', {
  width: '161px',
  height: '40px',
  background: '#6E707A',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
})
