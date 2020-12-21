import Range from "./Range";

const Quesion = ({ label, options, value, onChange }) => {
	return (
		<div className="Item">
			<div className="Question">
				<p className="Label">{label}</p>
				<Range
					left={options.firstAnswer}
					right={options.secondAnswer}
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default Quesion;
