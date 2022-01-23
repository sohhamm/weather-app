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
    mx: (value: string | number) => ({marginLeft: value, marginRight: value}),
    my: (value: string | number) => ({marginTop: value, marginBottom: value}),
    mt: (value: string | number) => ({marginTop: value}),
    mb: (value: string | number) => ({marginBottom: value}),
    mr: (value: string | number) => ({marginRight: value}),
    ml: (value: string | number) => ({marginLeft: value}),
    px: (value: string | number) => ({paddingLeft: value, paddingRight: value}),
    py: (value: string | number) => ({paddingTop: value, paddingBottom: value}),
    pt: (value: string | number) => ({paddingTop: value}),
    pb: (value: string | number) => ({paddingBottom: value}),
    pr: (value: string | number) => ({paddingRight: value}),
    pl: (value: string | number) => ({paddingLeft: value}),
  },
})
