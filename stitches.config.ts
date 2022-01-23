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
    mx: value => ({marginLeft: value, marginRight: value}),
    my: value => ({marginTop: value, marginBottom: value}),
    mt: value => ({marginTop: value}),
    mb: value => ({marginBottom: value}),
    mr: value => ({marginRight: value}),
    ml: value => ({marginLeft: value}),
    px: value => ({paddingLeft: value, paddingRight: value}),
    py: value => ({paddingTop: value, paddingBottom: value}),
    pt: value => ({paddingTop: value}),
    pb: value => ({paddingBottom: value}),
    pr: value => ({paddingRight: value}),
    pl: value => ({paddingLeft: value}),
  },
})
