import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ProjectCardsShow from 'Components/Project/ProjectCardsShow'
import ProjectActions from 'Components/Project/ProjectActions'

import Layout from 'Components/Layout'

const Home = () => (
	<Layout>
		<Box sx={{ width: '90%', maxWidth: '80rem', m: '0 auto' }}>
			<Typography variant='h1' align='center' sx={{ padding: '3rem 0' }}>
				Cules Project
			</Typography>

			<ProjectActions />

			<ProjectCardsShow />
		</Box>
	</Layout>
)

export default Home
