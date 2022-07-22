var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is running.

var server = supertest.agent("http://localhost:3001");

// UNIT test begin

describe("API unit test", () => {
  it("should add two numbers", (done) => {
    // calling add api
    server
      .post("/add")
      .send({ firstNumber: 10, secondNumber: 20 })
      .expect("Content-type", /json/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.result.should.equal(30);
        done();
      });
  });
});
