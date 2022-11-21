import Select from "react-select/";
import "./App.css";
function App() {
	const handleChange = (e) => {
		console.log(e.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};
	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" onChange={handleChange} />
				<Select
					options={options}
					className="external-select"
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;
