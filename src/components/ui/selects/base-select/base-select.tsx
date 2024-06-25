import { MenuItem, Select } from '@mui/material'

import { BaseSelectProps } from './base-select-props'

export const BaseSelect = ({
	items,
	selectedItem,
	onConvert,
	onChange,
}: BaseSelectProps) => {
	return (
		<Select value={selectedItem} onChange={onChange}>
			{items.map(item => (
				<MenuItem value={item} key={item}>
					{onConvert ? onConvert(item) : item}
				</MenuItem>
			))}
		</Select>
	)
}
