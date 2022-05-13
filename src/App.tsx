import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ProjectCardsShow from 'Components/Project/ProjectCardsShow'

const Home = () => (
	<Box sx={{ width: '90%', maxWidth: '80rem', m: '0 auto' }}>
		<Typography variant='h1' align='center' sx={{ padding: '2rem 0' }}>
			Cules Project
		</Typography>

		<ProjectCardsShow />
	</Box>
)

export default Home
