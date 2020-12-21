import { Radar } from "react-chartjs-2";

const radarOptions = {
	// maintainAspectRatio: false,
	responsive: true,
	legend: {
		labels: {
			fontColor: "rgba(0,0,0,.7)",
			fontSize: 19,
		},
	},
	scale: {
		pointLabels: {
			fontColor: "rgba(0,0,0,.7)",
			fontSize: 14,
		},
		ticks: {
			suggestedMin: 0,
			suggestedMax: 1,
			backdropColor: "transparent",
			fontColor: "rgba(0,0,0,.7)",
			fontSize: 14,
		},
		gridLines: {
			color: "rgba(0,0,0,0.2)",
		},
	},
};

const groups = [
	{
		type: "ILE",
		ua: "ІЛЕ",
		ru: "ИЛЭ",
		full: "Интуитивно-логический экстраверт ",
		proffesion: "Научно-исследовательская деятельность",
	},
	{
		type: "ILI",
		ua: "ІЛІ",
		ru: "ИЛИ",
		full: "Интуитивно-логический интроверт",
		proffesion: "Научно-исследовательская деятельность",
	},
	{
		type: "LII",
		ua: "ЛІІ",
		ru: "ЛИИ",
		full: "Логико-интуитивный интроверт",
		proffesion: "Научно-исследовательская деятельность",
	},
	{
		type: "LIE",
		ua: "ЛІЕ",
		ru: "ЛИЭ",
		full: "Логико-интуитивный экстраверт",
		proffesion: "Научно-исследовательская деятельность",
	},
	{
		type: "LSE",
		ua: "ЛСЕ",
		ru: "ЛСЭ",
		full: "Логико-сенсорный экстраверт",
		proffesion: "Технико-управленческая деятельность",
	},
	{
		type: "LSI",
		ua: "ЛСІ",
		ru: "ЛСИ",
		full: "Логико-сенсорный интроверт",
		proffesion: "Технико-управленческая деятельность",
	},
	{
		type: "SLI",
		ua: "СЛІ",
		ru: "СЛИ",
		full: "Сенсорно-логический интроверт",
		proffesion: "Технико-управленческая деятельность",
	},
	{
		type: "SLE",
		ua: "СЛЕ",
		ru: "СЛЭ",
		full: "Сенсорно-логический экстраверт",
		proffesion: "Технико-управленческая деятельность",
	},
	{
		type: "SEE",
		ua: "СЕЕ",
		ru: "СЭЭ",
		full: "Сенсорно-этический экстраверт",
		proffesion: "Социально-коммуникативная деятельность",
	},
	{
		type: "SEI",
		ua: "СЕІ",
		ru: "СЭИ",
		full: "Сенсорно-этический интроверт",
		proffesion: "Социально-коммуникативная деятельность",
	},
	{
		type: "ESI",
		ua: "ЕСІ",
		ru: "ЭСИ",
		full: "Этико-сенсорный интроверт",
		proffesion: "Социально-коммуникативная деятельность",
	},
	{
		type: "ESE",
		ua: "ЕСЕ",
		ru: "ЭСЭ",
		full: "Этико-сенсорный экстраверт",
		proffesion: "Социально-коммуникативная деятельность",
	},
	{
		type: "EIE",
		ua: "ЕІЕ",
		ru: "ЭИЭ",
		full: "Этико-интуитивный экстраверт",
		proffesion: "Гуманитарно-художественная деятельность",
	},
	{
		type: "EII",
		ua: "ЕІІ",
		ru: "ЭИИ",
		full: "Этико-интуитивный интроверт",
		proffesion: "Гуманитарно-художественная деятельность",
	},
	{
		type: "IEI",
		ua: "ІЕІ",
		ru: "ИЭИ",
		full: "Интуитивно-этический интроверт",
		proffesion: "Гуманитарно-художественная деятельность",
	},
	{
		type: "IEE",
		ua: "ІЕЕ",
		ru: "ИЭЭ",
		full: "Интуитивно-этический экстраверт",
		proffesion: "Гуманитарно-художественная деятельность",
	},
];

const labels = groups.map((g) => g.ru);
const data = {
	labels,
	datasets: [
		{
			label: "Тип информационного метаболизма",
			backgroundColor: "rgb(76,192,192,.2)",
			borderColor: "rgb(76,192,192)",
			pointBackgroundColor: "rgb(76,192,192)",
			pointBorderColor: "rrgb(76,192,192,.4)",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgb(76,192,192)",
		},
	],
};

const ChartComponent2 = ({ blocks }) => {
	const getBlockRes = (block) => {
		let firstVal = 0;
		block.forEach(({ value = 50 }) => {
			firstVal += +value;
		});
		return [firstVal, 1000 - firstVal];
	};

	const firstBlockRes = getBlockRes(blocks[0]);
	const secondBlockRes = getBlockRes(blocks[1]);
	const thirdBlockRes = getBlockRes(blocks[2]);

	const vert = firstBlockRes[1] > firstBlockRes[0] ? "I" : "E";
	const sec = secondBlockRes[0] > secondBlockRes[1] ? "L" : "E";
	const thd = thirdBlockRes[0] > thirdBlockRes[1] ? "S" : "I";

	// const datas = [
	// 	{ t: "extrovert", v: firstBlockRes[0] },
	// 	{ t: "introverr", v: firstBlockRes[1] },
	// 	{ t: "logic", v: secondBlockRes[0] },
	// 	{ t: "ethics", v: secondBlockRes[1] },
	// 	{ t: "sensorics", v: thirdBlockRes[0] },
	// 	{ t: "intuition", v: thirdBlockRes[1] },
	// ];
	let type = "";
	if (sec === "L") {
		if (thd === "S") {
			if (secondBlockRes[0] > thirdBlockRes[0]) {
				type = "LS";
			} else {
				type = "SL";
			}
		} else {
			if (secondBlockRes[0] > thirdBlockRes[1]) {
				type = "LI";
			} else {
				type = "IL";
			}
		}
	}
	if (sec === "E") {
		if (thd === "S") {
			if (secondBlockRes[1] > thirdBlockRes[0]) {
				type = "ES";
			} else {
				type = "SE";
			}
		} else {
			if (secondBlockRes[1] > thirdBlockRes[1]) {
				type = "EI";
			} else {
				type = "IE";
			}
		}
	}

	const socioType = `${type}${vert}`;
	console.log(socioType);

	const groupIndex = groups.findIndex((g) => g.type == socioType);

	const groupsList = [];

	for (let i = groupIndex; i < groups.length; i++) {
		groupsList.push(groups[i]);
	}
	for (let i = 0; i < groupIndex; i++) {
		groupsList.push(groups[i]);
	}

	for (let i = 0; i < 9; i++) {
		groupsList[i].range = i + 1;
	}

	let decreaser = 8;
	for (let i = 9; i < 16; i++) {
		groupsList[i].range = decreaser;
		decreaser--;
	}

	groupsList.forEach((gr) => {
		const grIndex = groups.findIndex((g) => g.type === gr.type);
		console.log(grIndex);
		groups[grIndex].value = 1 - (gr.range - 1) / 16;
	});

	const values = groups.map(({ value }) => value);

	data.datasets[0].data = values;

	const resultGroup = groups[groupIndex];

	return (
		<div className="RadarComponent">
			<Radar data={data} options={radarOptions} />
			<div className="Description">
				<p>
					Тип информационного метаболизма: ({resultGroup.ru}) {resultGroup.full}
				</p>
				<p>Тип профессиональной деятельности: {resultGroup.proffesion}</p>
			</div>
		</div>
	);
};

export default ChartComponent2;
