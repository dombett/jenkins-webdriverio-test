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
  export PASSED=6
  export FAILED=2
  export TOTAL=8
  export REPORT_PORTAL_LINK=http://reportportallink.com/some/kind/of/link
  `;
  writeResultsToFile(results)
});

function writeResultsToFile(results) {
  const filePath = path.join(process.cwd(), 'results')
  fs.writeFileSync(filePath, results)
}
