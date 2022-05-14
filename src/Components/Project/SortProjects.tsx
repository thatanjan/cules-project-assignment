import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const BasicSelect = () => {
	const sortingOptions = {
		dateAsc: 'Date (ascending)',
		dateDesc: 'Date (descending)',
		nameAsc: 'Name (ascending)',
		nameDesc: 'Name (descending)',
		ratingAsc: 'Rating (ascending)',
		ratingDesc: 'Rating (descending)',
	}

	const [sortingOption, setSortingOption] = useState(sortingOptions.nameAsc)

	const handleChange = (event: SelectChangeEvent) => {
		setSortingOption(event.target.value as string)
	}

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl variant='standard' fullWidth>
				<InputLabel>Sort Projects</InputLabel>

				<Select value={sortingOption} label='Sort' onChange={handleChange}>
					{Object.keys(sortingOptions).map(key => (
						<MenuItem value={key} key={key}>
							{sortingOptions[key as keyof typeof sortingOptions]}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	)
}

export default BasicSelect
