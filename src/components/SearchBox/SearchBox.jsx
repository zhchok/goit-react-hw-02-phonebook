import { Box } from "components/box/box";

export function SearchBox({ value, onChange }) {
	return (
		<Box>
			<p>Find contacts by name</p>
			<input value={value} type="text" onChange={onChange} />
		</Box>
	);
}
