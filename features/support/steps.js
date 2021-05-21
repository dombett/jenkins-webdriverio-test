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
  const results = `
  PASSED=6
  FAILED=2
  TOTAL=8
  REPORT_PORTAL_LINK=http://reportportallink.com/some/kind/of/link
  `;
  writeResultsToFile(results)
});

function writeResultsToFile(results) {
  const filePath = path.join(__dirname, 'results')
  fs.writeFileSync(filePath, results)
}
