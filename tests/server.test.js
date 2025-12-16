const request = require("supertest");
// const supertest = require("supertest");
const {app} = require("../src/server.js");

test("Root route works", async () => {
	let response = await request(app).get("/");
	// response = await request(app).post("/users/register");

	expect(response.body.message).toBe("Hello, world!");
	expect(1 + 1).toBe(2);
})