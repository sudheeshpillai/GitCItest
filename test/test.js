var request = require("supertest");
//var should = require("chai").should();
//var expect = require('chai').expect;

// This agent refers to PORT where program is runninng.

//var server = supertest.agent("https://www.cognizant.com");
var app = require("../app").getApp;

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("should return home page",function(done){

    // calling home page api
    request(app)
    .get("/")
    //.expect("Content-type",/json/)
    .expect(200, done) // THis is HTTP response
    //.end(function(err,res){
      // HTTP status should be 200
      //expect(res.status).to.have.equal(200);
      // Error key should be false.
      //res.body.error.should.equal(false);
      //done();
    //});
  });

});
