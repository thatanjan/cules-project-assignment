import { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { motion } from 'framer-motion'

import DeleteIcon from '@mui/icons-material/Delete'

import { Project } from 'types/Project'

import { useAppDispatch } from 'redux/hooks/baseHooks'
import { deleteProject } from 'redux/reducers/projectsReducer'

import DeleteProject from './DeleteProject'

const DeleteButton = ({ id }: { id: string }) => {
	const dispatch = useAppDispatch()

	const [open, setOpen] = useState(false)

	const handleClose = () => {
		setOpen(false)
	}

	const handleOpen = () => {
		setOpen(true)
	}

	const handleDelete = () => {
		dispatch(deleteProject(id))

		deleteProject(id)
		handleClose()
	}

	return (
		<>
			<IconButton
				sx={{
					'& svg': { color: 'white' },
				}}
				onClick={handleOpen}
			>
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

const randomBgColors = ['f44336', '0e91a5', 'c11c9e', 'e5095c', '449b48']

const ProjectCard = ({ name, rating, url, id }: Project) => {
	const randomColor =
		randomBgColors[Math.floor(Math.random() * randomBgColors.length)]

	return (
		<Card
			sx={{ pb: '1rem', backgroundColor: `#${randomColor}`, color: 'white' }}
			component={motion.div}
			layout
			initial={{
				scale: 0,
			}}
			animate={{
				scale: 1,
			}}
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.2 },
				cursor: 'pointer',
			}}
		>
			<CardHeader
				action={<DeleteButton id={id} />}
				title={<Typography variant='h4'>{name}</Typography>}
			/>
			<CardContent
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Rating
					value={rating}
					readOnly
					sx={{
						mt: '0rem',

						'& .MuiRating-iconEmpty': { color: '#c1c1c1' },
					}}
				/>

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
}
export default ProjectCard
