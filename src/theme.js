import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme()
theme = responsiveFontSizes(theme)

export default theme
