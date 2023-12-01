import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Calculator from "../components/Calculator";
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const operators = ["+", "-", "/", "*", "%"];

const equalSign = "=";
describe("calculator", () => {
	afterEach(cleanup); // after each test clean up.
	it("should <Calculator/> render", () => {
		render(<Calculator />);
	});

	it("should render and find text", () => {
		render(<Calculator />);
		screen.getByText("Calculator");
	});

	it("should render numbers", () => {
		render(<Calculator />);
		numbers.forEach((number) => {
			screen.getByText(number);
		});
	});
	it("should render operators", () => {
		render(<Calculator />);
		operators.forEach((operator) => {
			screen.getByText(operator);
		});
	});

	it("should render equal sign", () => {
		render(<Calculator />);
		screen.getByText(equalSign);
	});

	it("should push number to the calcuation bar", () => {
		render(<Calculator />);
		numbers.forEach((number) => {
			const button = screen.getByText(number);
			fireEvent.click(button);
			const resultBar = screen.getByRole("textbox");
			expect(resultBar.value).toMatch(number.toString());
		});
	});

	it("should push operator to the calcuation bar", () => {
		render(<Calculator />);
		operators.forEach((operator) => {
			const button = screen.getByText(operator);
			fireEvent.click(button);
			const resultBar = screen.getByRole("textbox");
			expect(resultBar.value).toMatch(operator);
		});
	});

	it("should return a number onClicking the equalSign", () => {
    render(<Calculator />);
    const one = screen.getByText('1')
    const plus = screen.getByText('+')
    const equal = screen.getByText(equalSign)
    fireEvent.click(one)
    fireEvent.click(plus)
    fireEvent.click(one)
		fireEvent.click(equal);
		expect(Number(screen.getByRole('textbox').value)).toBe(2)
	});
});

// API
/*
render: render(component) // check if component is rendered
screen: as the body, find within
getByText: used to find within the screen
getByRole: used to get element by role property

fireEvent: used to fire event on the element passed
*/
