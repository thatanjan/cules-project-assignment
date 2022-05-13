import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface Props {
	id: string
	handleClose: () => void
	open: boolean
}

const AlertDialog = ({ id, open, handleClose }: Props) => (
	<Dialog open={open} onClose={handleClose}>
		<DialogTitle>Are you sure you want to delete this project?</DialogTitle>
		<DialogContent>
			<DialogContentText id='alert-dialog-description'>
				This action cannot be undone.
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={handleClose}>No</Button>
			<Button onClick={handleClose} autoFocus>
				Yes
			</Button>
		</DialogActions>
	</Dialog>
)

export default AlertDialog
