import { useRef } from "react";
import {evaluate } from "mathjs"
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const operators = ["+", "-", "/", "*", "%"];

const equalSign = "=";
const Calculator = () => {
	const doOperation = (op) => {
    const resultBar = resultBarRef.current;
    const result = evaluate(op);
		resultBar.value = result;
		return;
	};
	//
	const resultBarRef = useRef(null);
	const handleClick = (num) => {
		const resultBar = resultBarRef.current;

		resultBar.value += num;
		return;
	};
	return (
		<section>
			<h1>Calculator</h1>
			<input role="textbox" ref={resultBarRef} value="" readOnly />
			<div className="numbers">
				{numbers.map((number) => {
					return (
						<button key={number} onClick={() => handleClick(number)}>
							{number}
						</button>
					);
				})}
			</div>
			<div className="operators">
				{operators.map((operator) => {
					return (
						<button key={operator} onClick={() => handleClick(operator)}>
							{operator}
						</button>
					);
				})}
			</div>
			<span onClick={() => doOperation(resultBarRef.current.value)}>{equalSign}</span>
		</section>
	);
};

export default Calculator