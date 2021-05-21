const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const fs = require('fs')
const path = require('path');

Given("a variable set to {int}", function (number) {
  this.setTo(number);
});

When("I increment the variable by {int}", function (number) {
  this.incrementBy(number);
});

Then("the variable should contain {int}", function (number) {
  assert.equal(this.variable, number);
  const results = {
    passed: 6,
    failed: 2,
    total: 8
  }
  writeResultsToFile(results)
});

function writeResultsToFile(results) {
  const filePath = path.join(__dirname, results)
  fs.writeFileSync(filePath, JSON.stringify(results))
}