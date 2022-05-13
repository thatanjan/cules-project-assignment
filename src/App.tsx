/* eslint-disable react/jsx-no-useless-fragment */
import Typography from '@mui/material/Typography'

import ProjectCardsShow from 'Components/Project/ProjectCardsShow'

const Home = () => (
	<>
		<Typography variant='h1' align='center' sx={{ padding: '2rem 0' }}>
			Cules Project
		</Typography>

		<ProjectCardsShow />
	</>
)

export default Home
