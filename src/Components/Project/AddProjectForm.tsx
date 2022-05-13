import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { nanoid } from 'nanoid'

import { Project } from 'types/Project'

interface Props {
	open: boolean
	setOpen: (open: boolean) => void
}

const initialValues: Project = {
	name: '',
	id: nanoid(),
	rating: 0,
	created_at: new Date().toISOString(),
	url: '',
}

const FormDialog = ({ open, setOpen }: Props) => {
	const handleClose = () => setOpen(false)

	const handleSubmit = () => {}

	return (
		<Formik
			validate={values => {}}
			onSubmit={handleSubmit}
			initialValues={initialValues}
		>
			{({ submitForm, isSubmitting }) => (
				<Form>
					<Dialog open={open} onClose={handleClose}>
						<DialogTitle>Add new Project</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Please provide project information to add a new project.
							</DialogContentText>

							<Field component={TextField} name='email' type='email' label='Email' />
							<br />
							<Field
								component={TextField}
								type='password'
								label='Password'
								name='password'
							/>
							<br />
							<Button
								variant='contained'
								color='primary'
								disabled={isSubmitting}
								onClick={submitForm}
							>
								Submit
							</Button>
						</DialogContent>

						<DialogActions>
							<Button onClick={handleClose}>Cancel</Button>
							<Button onClick={handleSubmit}>Add</Button>
						</DialogActions>
					</Dialog>
				</Form>
			)}
		</Formik>
	)
}

export default FormDialog
