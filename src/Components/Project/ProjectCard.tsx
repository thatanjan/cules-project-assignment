import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

import DeleteIcon from '@mui/icons-material/Delete'

import { Project } from 'types/Project'

import DeleteProject from './DeleteProject'

interface DeleteCardProps {
	id: string
	deleteProject: (id: string) => void
}

const DeleteCard = ({ id, deleteProject }: DeleteCardProps) => {
	const [open, setOpen] = useState(false)

	const handleClose = () => {
		setOpen(false)
	}

	const handleOpen = () => {
		setOpen(true)
	}

	const handleDelete = () => {
		deleteProject(id)
		handleClose()
	}

	return (
		<>
			<IconButton onClick={handleOpen}>
				<DeleteIcon />
			</IconButton>
			<DeleteProject
				open={open}
				handleDelete={handleDelete}
				handleClose={handleClose}
			/>
		</>
	)
}

interface ProjectCardProps extends Project {
	deleteProject: (id: string) => void
}

const ProjectCard = ({
	name,
	rating,
	url,
	id,
	deleteProject,
}: ProjectCardProps) => (
	<Card component={Grid} item xs={6} sx={{ pb: '1rem' }}>
		<CardHeader
			action={<DeleteCard id={id} deleteProject={deleteProject} />}
			title={<Typography variant='h4'>{name}</Typography>}
		/>
		<CardContent
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Rating value={rating} readOnly sx={{ mt: '0rem' }} />

			<Button
				component={Link}
				href={url}
				underline='none'
				target='_blank'
				rel='noopener noreferrer'
				variant='contained'
			>
				Visit
			</Button>
		</CardContent>
	</Card>
)

export default ProjectCard
