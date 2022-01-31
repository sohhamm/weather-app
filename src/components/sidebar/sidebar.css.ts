import bgPath from '/assets/cloud-bg.png'
import {styled} from '../../../stitches.config'
import {MdMyLocation} from 'react-icons/md'

MdMyLocation.toString = () => '.location'

export const LeftBox = styled('div', {
  padding: '42px 46px 52px 46px',
  backgroundColor: '$primary',
  display: 'flex',
  flexDirection: 'column',
  // position: 'relative',
  '&::after': {
    content: '',
    display: 'block',
    backgroundImage: `url(${bgPath})`,
    backgroundPosition: '50% 20%',
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'contain',
    width: '100%',
    height: '100%',
    zIndex: 1,
    filter: 'opacity(12%)',
    // margin: '0 auto',
  },
})

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  variants: {
    variant: {
      wide: {
        justifyContent: 'space-between',
      },
      center: {
        justifyContent: 'center',
      },
    },
  },
  [`& ${MdMyLocation}`]: {
    color: 'white',
    border: '10px solid #6E707A',
    borderRadius: '100%',
  },
})

export const SearchButton = styled('button', {
  width: '161px',
  height: '40px',
  background: '#6E707A',
  border: 'none',
  color: 'white',
  fontSize: '1.05em',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
})

export const Image = styled('img', {})

export const Text = styled('p', {
  fontSize: '48px',
})
