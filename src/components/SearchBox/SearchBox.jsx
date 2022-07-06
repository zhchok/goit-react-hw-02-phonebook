export function SearchBox({ value, onChange }) {
	return (
		<>
			<p>Find contacts by name</p>
			<input value={value} type="text" onChange={onChange} />
		</>
	);
}
