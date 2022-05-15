import { useMemo, useState, ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

interface Props {
	children: ReactNode
}

type Mode = 'light' | 'dark'

const Layout = ({ children }: Props) => {
	const [mode, setMode] = useState<Mode>('dark')

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	)

	return (
		<ThemeProvider theme={theme}>
			<Paper
				sx={{
					maxWidth: '100%',
					overflowX: 'hidden',
					minHeight: '100vh',
				}}
			>
				{children}
			</Paper>
		</ThemeProvider>
	)
}

export default Layout
