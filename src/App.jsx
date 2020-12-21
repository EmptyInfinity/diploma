import { useState } from "react";
import Question from "./components/Question";
import Button from "./components/Button";
import Chart from "./components/Chart";
import Chart2 from "./components/Chart2";

const defaultData = [
	[
		{
			question: "Что Вам кажется более важным?",
			firstAnswer: "Оценка окружающих",
			secondAnswer: "Самооценка",
		},
		{
			question:
				"Для того, чтобы разобраться в каком-либо вопросе, что проще для Вас?",
			firstAnswer: "Спросить",
			secondAnswer: "Прочитать",
		},
		{
			question: "Круг Ваших знакомств...",
			firstAnswer: "Широк",
			secondAnswer: "Узок",
		},
		{
			question: "Легко ли Вам заговорить первым с незнакомым Вам человеком?",
			firstAnswer: "Да",
			secondAnswer: "Нет",
		},
		{
			question:
				"Если Вам что-либо нужно сделать, легко ли Вам обратиться к другим людям?",
			firstAnswer: "Да",
			secondAnswer: "Нет",
		},
		{
			question:
				"В гостях Вам, как правило, интересно общаться с большинством  присутствующих?",
			firstAnswer: "Да",
			secondAnswer: "Нет",
		},
		{
			question: "Можно ли сказать, что Вы скорее всего общительный человек?",
			firstAnswer: "Да",
			secondAnswer: "Нет",
		},
		{
			question: "Можно ли сказать, что Вы скорее всего общительный человек?",
			firstAnswer: "Раскованный",
			secondAnswer: "Сдержанный",
		},
		{
			question:
				"Какое слово больше всего соответствует Вашему духовному складу?",
			firstAnswer: "Оживленный",
			secondAnswer: "Спокойный",
		},
		{
			question:
				"Какое слово больше всего соответствует Вашему духовному складу?",
			firstAnswer: "Общительный",
			secondAnswer: "Замкнутый",
		},
	],
	[
		{
			question:
				"Какое определение больше всего соответствует Вашему духовному складу?",
			firstAnswer: "Критичный",
			secondAnswer: "Некритичный",
		},
		{
			question:
				"Какое определение больше всего соответствует Вашему духовному складу?",
			firstAnswer: "Предусмотрительный",
			secondAnswer: "Сочуствующий",
		},
		{
			question:
				"Какое определение больше всего соответствует Вашему духовному складу?",
			firstAnswer: "Справедливость",
			secondAnswer: "Пощада",
		},
		{
			question:
				"Какое определение больше всего соответствует Вашему духовному складу?",
			firstAnswer: "Осторожный",
			secondAnswer: "Доверчивый",
		},
		{
			question:
				"Какое действие больше всего соответствует Вашему духовному складу?",
			firstAnswer: "Думать",
			secondAnswer: "Переживать",
		},
		{
			question: "Ваш склад ума скорее...",
			firstAnswer: "Технический",
			secondAnswer: "Гуманитарный",
		},
		{
			question: "Что больше соответствует Вашему духовному складу?",
			firstAnswer: "Рассудительность",
			secondAnswer: "Сочуствие",
		},
		{
			question: "Что Вы легче запоминаете?",
			firstAnswer: "Числа",
			secondAnswer: "Лица и (или) имена",
		},
		{
			question: "Какое слово больше соответствует Вашему духовному складу?",
			firstAnswer: "Истина",
			secondAnswer: "Красота",
		},
		{
			question:
				"Считаете ли Вы справедливой формулу: «Закон суров, но это закон»?",
			firstAnswer: "Да",
			secondAnswer: "Нет",
		},
	],
	[
		{
			question: "Что больше вызывает Ваше доверие?",
			firstAnswer: "Опыт",
			secondAnswer: "Предчувствие",
		},
		{
			question: "Что, по Вашему мнению, хуже?",
			firstAnswer: "Витать в облаках",
			secondAnswer: "Идти проторенной дорожкой",
		},
		{
			question: "Вы в жизни человек скорее...",
			firstAnswer: "Практичный.",
			secondAnswer: "Непрактичный.",
		},
		{
			question: "Что больше Вас раздражает во время дождя?",
			firstAnswer: "Возможность быть обрызганным автомашиной.",
			secondAnswer: "Необходимость пробираться по лужам и грязи.",
		},
		{
			question:
				"Что для Вас является наибольшей похвалой? Сказать, что Вы имеете...",
			firstAnswer: "Здравый смысл",
			secondAnswer: "Богатую фантазию",
		},
		{
			question: "Что больше соответствует Вашему духовному складу?",
			firstAnswer: "Практика",
			secondAnswer: "Теория",
		},
		{
			question: "Какое понятие больше соответствует Вашему духовному складу?",
			firstAnswer: "Конкретность (то, что можно «пощупать руками»)",
			secondAnswer: "Абстрактность (то, что является «продуктом умозаключения»",
		},
		{
			question: "Вам больше нравится что-то...",
			firstAnswer: "Сделать",
			secondAnswer: "Придумать",
		},
		{
			question: "Какое слово Вам больше нравится?",
			firstAnswer: "Фундамент",
			secondAnswer: "Шпиль",
		},
		{
			question: "Что Вас больше интересует в работе/учебе?",
			firstAnswer: "Опыт",
			secondAnswer: "Теория",
		},
	],
];

const App = () => {
	const [currentBlock, setCurrentBlock] = useState(0);
	const [blocks, setBlocks] = useState(defaultData);
	const [showResult, setShowResult] = useState(false);
	const navigate = (to) => {
		if (to === "next") {
			setCurrentBlock(currentBlock + 1);
		}
		if (to === "prev") {
			setCurrentBlock(currentBlock - 1);
		}
		if (typeof to === "number") {
			setCurrentBlock(to);
		}
	};

	const nextBlock = blocks[currentBlock + 1] ? true : false;
	const prevBlock = blocks[currentBlock - 1] ? true : false;

	const renderBlock = () => {
		const block = blocks[currentBlock];

		return block.map((data, idx) => {
			const { question, firstAnswer, secondAnswer, value } = data;
			return (
				<Question
					key={idx}
					label={question}
					value={value}
					options={{ firstAnswer, secondAnswer }}
					onChange={(value) => {
						const updatedBlocks = JSON.parse(JSON.stringify(blocks));
						updatedBlocks[currentBlock][idx].value = value;

						setBlocks(updatedBlocks);
					}}
				/>
			);
		});
	};

	const renderPagesList = () => {
		return blocks.map((b, i) => (
			<span
				className={`Page ${i === currentBlock && "current"}`}
				key={i}
				onClick={() => navigate(i)}
			>
				{i + 1}
			</span>
		));
	};

	return (
		<div className="App">
			<div className={showResult ? "main" : "Container main"}>
				<h1 className={showResult ? "Container dark-font" : ""}></h1>

				{showResult ? (
					<div className="Charts">
						<Chart blocks={blocks} />
						<Chart2 blocks={blocks} />
					</div>
				) : (
					<div className="Items">{renderBlock()}</div>
				)}

				{showResult ? (
					<div className="Navigation justify-center">
						<Button value="Назад" onClick={() => setShowResult(false)} />
					</div>
				) : (
					<div className="Navigation">
						<Button
							value="Предыдущая"
							onClick={() => navigate("prev")}
							disabled={!prevBlock}
						/>
						<div className="Pages">{renderPagesList()}</div>
						{nextBlock ? (
							<Button value="Следующая" onClick={() => navigate("next")} />
						) : (
							<Button
								value="Показать результат"
								onClick={() => setShowResult(true)}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
export default App;
