import { Radar } from "react-chartjs-2";

const data = {
	labels: [
		"Экстраверт",
		"Интроверт",
		"Логика",
		"Этика",
		"Сенсорика",
		"Интуиция",
		"Рационал",
		"Иррационал",
	],
	datasets: [
		{
			label: "Портрет",
			backgroundColor: "rgba(255,99,132,0.2)",
			borderColor: "rgba(255,99,132,1)",
			pointBackgroundColor: "rgba(255,99,132,1)",
			pointBorderColor: "rgba(255,255,255,.4)",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(255,99,132,1)",
			data: [440, 560, 730, 270, 620, 380, 710, 290],
		},
	],
};

const radarOptions = {
	responsive: true,
	// maintainAspectRatio: false,
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
			suggestedMax: 900,
			backdropColor: "transparent",
			fontColor: "rgba(0,0,0,.7)",
			fontSize: 14,
		},
		gridLines: {
			color: "rgba(0,0,0,0.2)",
		},
	},
};

const ChartComponent = ({ blocks }) => {
	const getBlockRes = (block) => {
		let total = 0;
		block.forEach(({ value = 50 }) => {
			total += 100 - value;
		});

		return [total, 1000 - total];
	};
	const firstBlockRes = getBlockRes(blocks[0]);
	const secondBlockRes = getBlockRes(blocks[1]);
	const thirdBlockRes = getBlockRes(blocks[2]);
	const thirthBlock = [
		Math.abs(secondBlockRes[1] - secondBlockRes[0]),
		Math.abs(thirdBlockRes[0] - thirdBlockRes[1]),
	];
	// console.log(
	// 	...firstBlockRes,
	// 	...secondBlockRes,
	// 	...thirdBlockRes,
	// 	...thirthBlock
	// );

	data.datasets[0].data = [
		...firstBlockRes,
		...secondBlockRes,
		...thirdBlockRes,
		...thirthBlock,
	];

	// console.log(data.datasets[0].data);

	return (
		<div className="RadarComponent">
			<Radar data={data} options={radarOptions} />
			{/* <p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ab eveniet
				mollitia dolores. Excepturi hic dicta, saepe aliquid, eos magnam dolor
				natus similique velit tenetur necessitatibus? Exercitationem libero
				accusantium expedita voluptates repudiandae illo deserunt veniam aliquid
				magni ullam possimus, illum ex laborum ipsa recusandae eaque repellendus
				vitae? Ipsam, cupiditate mollitia!
			</p> */}
		</div>
	);
};

export default ChartComponent;
