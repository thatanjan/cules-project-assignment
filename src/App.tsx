import { useEffect } from 'react'
import Typography from '@mui/material/Typography'

import projectData from 'data.json'

import ProjectCardsShow from 'Components/Project/ProjectCardsShow'

import { getProjectData, storeProjectData } from 'utils/projectDataUtils'

const Home = () => {
	useEffect(() => {
		if (!getProjectData()) storeProjectData(projectData)
	}, [])

	return (
		<>
			<Typography variant='h1' align='center' sx={{ padding: '2rem 0' }}>
				Cules Project
			</Typography>

			<ProjectCardsShow />
		</>
	)
}

export default Home
