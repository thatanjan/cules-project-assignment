import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

import { useAppDispatch } from 'redux/hooks/baseHooks'
import { resetProjects } from 'redux/reducers/projectsReducer'

import AddProject from './AddProject'
import SortProjects from './SortProjects'

const ResetProjects = () => {
	const dispatch = useAppDispatch()

	return (
		<Button
			variant='contained'
			onClick={() => dispatch(resetProjects())}
			startIcon={<RestartAltIcon />}
		>
			Reset Projects
		</Button>
	)
}

const ProjectActions = () => (
	<Box
		sx={{
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginBottom: '3rem',

			'& button': {
				width: {
					xs: '100%',
					sm: 'auto',
				},
				marginBottom: {
					xs: '1rem',
					sm: '0',
				},
			},
		}}
	>
		<AddProject />

		<ResetProjects />

		<SortProjects />
	</Box>
)

export default ProjectActions
