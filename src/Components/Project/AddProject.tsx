import { useState } from 'react'
import Button from '@mui/material/Button'

import AddIcon from '@mui/icons-material/Add'

import AddProjectForm from './AddProjectForm'

const AddProject = () => {
	const [open, setOpen] = useState(false)

	const formProps = { open, setOpen }

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
