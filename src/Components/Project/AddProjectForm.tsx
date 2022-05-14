/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Rating from '@mui/material/Rating'
import { Formik, Form, Field, FieldAttributes, FormikHelpers } from 'formik'
import { TextField } from 'formik-mui'
import { nanoid } from 'nanoid'

import { Project } from 'types/Project'

import { useAppDispatch } from 'redux/hooks/baseHooks'

import { addProject } from 'redux/reducers/projectsReducer'

interface Props {
	open: boolean
	setOpen: (open: boolean) => void
	addNewProject: (project: Project) => void
}

interface CustomFieldProps extends FieldAttributes<any> {
	name: string
}

const CustomField = (props: CustomFieldProps) => {
	return (
		<Field
			component={TextField}
			{...props}
			variant='standard'
			fullWidth
			sx={{ mb: '1rem' }}
			type='text'
		/>
	)
}

interface ValidateInterface {
	name?: string
	url?: string
}

const isValidGithubUrl = (url: string) => {
	try {
		const newUrl = new URL(url)

		if (!newUrl || newUrl.hostname !== 'github.com') return false
	} catch (error) {
		return false
	}

	return true
}

const FormDialog = ({ open, setOpen, addNewProject }: Props) => {
	const dispatch = useAppDispatch()

	const [ratingValue, setRatingValue] = useState(0)

	const handleClose = () => setOpen(false)

	const handleSubmit = (
		values: Project,
		{ resetForm }: FormikHelpers<Project>
	) => {
		if (!ratingValue) return

		const project: Project = values
		project.rating = ratingValue

		dispatch(addProject(project))

		addNewProject(project)
		resetForm()
		handleClose()
	}

	const validate = (values: Project) => {
		const { name, url } = values

		const errors: ValidateInterface = {}

		if (!name) errors.name = 'Name is required'

		if (!url) errors.url = 'Url is required'

		if (!isValidGithubUrl(url)) errors.url = 'Url is not a valid github url'

		return errors
	}

	const initialValues: Project = {
		name: '',
		id: nanoid(),
		rating: 0,
		created_at: new Date().toISOString(),
		url: '',
	}

	return (
		<Formik
			validate={validate}
			onSubmit={handleSubmit}
			initialValues={initialValues}
		>
			{({ submitForm }) => (
				<Form>
					<Dialog open={open} onClose={handleClose}>
						<DialogTitle>Add new Project</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Please provide project information to add a new project.
							</DialogContentText>

							<CustomField label='Name' name='name' />
							<CustomField label='GitHub URL' name='url' />
							<Rating onChange={(_, newValue) => setRatingValue(newValue || 0)} />
						</DialogContent>

						<DialogActions>
							<Button onClick={handleClose}>Cancel</Button>
							<Button disabled={ratingValue < 1} onClick={submitForm}>
								Add
							</Button>
						</DialogActions>
					</Dialog>
				</Form>
			)}
		</Formik>
	)
}

export default FormDialog
