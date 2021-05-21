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
  env.PASSED="6"
  env.FAILED="2"
  env.TOTAL="8"
  env.REPORT_PORTAL_LINK="http://reportportallink.com/some/kind/of/link"
  `;
  writeResultsToFile(results, 'results.groovy')
});

function writeResultsToFile(results, resultsFile) {
  const filePath = path.join(process.cwd(), resultsFile)
  fs.writeFileSync(filePath, results)
}
