// stitches.config.ts
import {createStitches} from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#1E213A',
      primaryDark: '#100E1D',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: value => ({marginLeft: value, marginRight: value}),
  },
})
