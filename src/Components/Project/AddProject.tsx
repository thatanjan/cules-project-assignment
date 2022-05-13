import { useState } from 'react'
import Button from '@mui/material/Button'

import AddIcon from '@mui/icons-material/Add'

import { Project } from 'types/Project'

import AddProjectForm from './AddProjectForm'

interface Props {
	addNewProject: (project: Project) => void
}

const AddProject = ({ addNewProject }: Props) => {
	const [open, setOpen] = useState(false)

	const formProps = { open, setOpen, addNewProject }

	const openDialog = () => setOpen(true)

	return (
		<>
			<Button startIcon={<AddIcon />} variant='contained' onClick={openDialog}>
				Add project
			</Button>

			{open && <AddProjectForm {...formProps} />}
		</>
	)
}

export default AddProject
