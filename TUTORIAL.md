## Vitest

<pre>
the main target of testing is to work with TDD (test driven devolopment)
wich means:
expect the result of the functionality before cerating it.
</pre>

### install

```sh
npm i -D vitest @vitest/coverage-v8
```

### script command

```json
"scripts": {
		"test": "vitest",
		"coverage": "vitest run --coverage"
}
```

### example

```js
export function sum(a, b) {
	return a + b;
}
```

```js
import { expect, test } from "vitest"; // import tests methods
import { sum } from "../sum"; // fn that we will test

test("add num1 + num2 to equal Total", () => {
	expect(sum(1, 2)).toBe(3);
});

/*
test | it: is a method to test, args ("test name", callbackFn)

expect: method to check, args ("fn that we will expect on")

toBe: expect property used to compare expectation
*/
```

RUN:

```sh
npm run test

# output

 ✓ src/test/sum.test.js (1)
   ✓ add num1 + num2 to equal Total

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  10:47:55
   Duration  25ms

```

### API

<i>
here is the API of the test, describe and expect
</i>

#### expect API

```js
expect.soft(1 + 1).toBe(3); // in case of error will not crash
expect(1 + 1).not.toBe(1); // negation
expect(1 + 1).toBe(1); // to be number
toBe(0.3); // this will fail bcs 0.1 +0.2 = 0.300000000004
toBeCloseTo(0.3, 5); // this will pass //5 is used to round the number
toBeDefined(); // pass
toBeUndefined(); // pass
toBeTruthy(); // truthy value
toBeFalsy(); // falsy value
toBeNull(); // the value returned expected to be null
toBeNaN(); // the value returned expected to be NaN
toBeTypeOf();
toBeInstenceOf(); // expected to be instance of a class
toBeGreaterThan(num);
toBeGreaterThanOrEqual(num);
toBeLessThan(num);
toBeLessThanOrEqual(num);
toEqual();
toBeStrictEqual(); // the difference is in cheking the equatlity of objects and class
toContain(x); // checking in array or class list
toContainEqual(x); // as toEqual()
toHaveLength(n); // cheking for the length
toHaveProperty(key, val); // checking for property in obj
toMatch(regexp); // cheking for a RegExp in a string
toMatchObject(obj); // cheking for a obj in an arr | obj
toThrowError() | toThrow(); // checkin err cases
```

[....]
//////////////

### with React

#### install testing dependencies

```sh
npm i vitest
npm i -D happy-dom @testing-library/react
```

#### configration

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: "happy-dom" || "jsdom",
	},
});
```

### API for react library

```js
render(component); // check if component is rendered
cleanUp; // Unmounts React trees that were mounted with render.// outside of test
screen; //  as the body, find within

// screen methods
getByText(); //  used to find within the screen
getByRole(); // used to get element by role property
///

fireEvent.event(element); // used to fire event on the element passed
```

### Vitest API

```js
afterEach(do) // after each test usualy clearnUp
beforeEach(do) // before each test do
```
