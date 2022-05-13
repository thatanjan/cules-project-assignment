import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface Props {
	open: boolean
	setOpen: (open: boolean) => void
}

const FormDialog = ({ open, setOpen }: Props) => {
	const handleClose = () => setOpen(false)

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add new Project</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Please provide project information to add a new project.
				</DialogContentText>
				<TextField
					autoFocus
					margin='dense'
					id='name'
					label='Email Address'
					type='email'
					fullWidth
					variant='standard'
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClose}>Add</Button>
			</DialogActions>
		</Dialog>
	)
}

export default FormDialog
