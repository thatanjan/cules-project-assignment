import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { sortingOptions, SortType } from 'globalVars'

import { useSortType, useAppDispatch } from 'redux/hooks/baseHooks'

import { sortProjects } from 'redux/reducers/projectsReducer'

const BasicSelect = () => {
	const sortType = useSortType()
	const dispatch = useAppDispatch()

	const handleChange = (event: SelectChangeEvent) => {
		const value = event.target.value as SortType

		dispatch(sortProjects(value))
	}

	return (
		<Box sx={{ minWidth: '15rem' }}>
			<FormControl variant='standard' fullWidth>
				<InputLabel>Sort Projects</InputLabel>

				<Select value={sortType} label='Sort' onChange={handleChange}>
					{Object.keys(sortingOptions).map(key => {
						const value = sortingOptions[key as keyof typeof sortingOptions]

						return (
							<MenuItem value={value} key={key}>
								{value}
							</MenuItem>
						)
					})}
				</Select>
			</FormControl>
		</Box>
	)
}

export default BasicSelect
