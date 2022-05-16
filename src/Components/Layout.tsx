import { useMemo, useState, ReactNode } from 'react'
import {
	ThemeProvider,
	createTheme,
	responsiveFontSizes,
} from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Fab from '@mui/material/Fab'

import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightIcon from '@mui/icons-material/Nightlight'

import { Provider } from 'react-redux'

import { store } from 'redux/store'

interface Props {
	children: ReactNode
}

type Mode = 'light' | 'dark'

const Layout = ({ children }: Props) => {
	const [mode, setMode] = useState<Mode>('dark')

	const theme = useMemo(
		() =>
			responsiveFontSizes(
				createTheme({
					palette: {
						mode,
					},
				})
			),
		[mode]
	)

	const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light')

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Paper
					sx={{
						maxWidth: '100%',
						overflowX: 'hidden',
						minHeight: '100vh',
						paddingBottom: '10rem',
					}}
				>
					{children}

					<Fab
						color='primary'
						onClick={toggleMode}
						sx={{
							position: 'fixed',
							bottom: '10%',
							right: '10%',
						}}
					>
						{mode === 'light' ? <NightlightIcon /> : <LightModeIcon />}
					</Fab>
				</Paper>
			</ThemeProvider>
		</Provider>
	)
}

export default Layout
