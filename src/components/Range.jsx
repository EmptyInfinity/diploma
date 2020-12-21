const Range = ({ left, right, value = 50, onChange }) => (
	<div className="Range">
		<div className="Labels">
			<span>{left}</span>
			<span>{right}</span>
		</div>
		<div className="wrap">
			<input
				type="range"
				min="0"
				max="100"
				step="1"
				value={value}
				onChange={onChange}
			/>
		</div>
	</div>
);

export default Range;
