import { app } from "../server";
import supertest from "supertest";
const request = supertest(app);
describe("Testing Users route spec", () => {
  it("test the Users api endpoint", async () => {
      const testToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZmlyc3RuYW1lIjoibG9vbyIsImxhc3RuYW1lIjoiam9yc2RzZHNkZGRhbiIsInBhc3N3b3JkIjoiJDJiJDEwJGZqOWJWa00uRkllWEFtbXRwcFdiaHUvUDR0ajVER3IwTkhYTnlvVVV4dXYudXFVb2pEYWlpIiwiaWF0IjoxNjU1NDc3ODgzfQ.ZzRwck59SXfHBXTZxdhnimVinZhfqzPYKM46cfUkRuA";
   
    const response = await request.get("/users").set('Authorization', 'Bearer ' + testToken) ;
   
    expect(response.status).toBe(200);
  });
});