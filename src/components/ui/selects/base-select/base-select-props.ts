import { SelectChangeEvent } from '@mui/material'

export type BaseSelectProps = {
	items: string[]
	selectedItem: string
	onConvert?: (element: string) => string
	onChange: (event: SelectChangeEvent) => void
}
