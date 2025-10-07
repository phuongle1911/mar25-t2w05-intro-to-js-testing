const { stringRepeater } = require("../src/utils/StringRepeater");


test("StringRepeater happy path", () => {

	let result = null;
	result = stringRepeater("hello");
	// result should be "hellohellohello"

	expect(result).toBe("hellohellohello");
});

// test(name, callback);