import { SelectChangeEvent } from '@mui/material'
type ItemType = {
	value: string
	label: string
}

export type BaseSelectProps = {
	items: ItemType[]
	selectedItem: string
	onConvert?: (element: string) => string
	onChange: (event: SelectChangeEvent) => void
}
