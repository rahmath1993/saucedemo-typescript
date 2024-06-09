import { config as configDotEnv } from "dotenv";
import { CucumberJsJsonReporter } from "wdio-cucumberjs-json-reporter";
import { removeSync } from "fs-extra";
import "dotenv/config";
const { generate } = require("multiple-cucumber-html-reporter");
import dns from "node:dns";
import data from "../test/support/data";
export const config: WebdriverIO.Config = {
  runner: "local",
  specs: ["../test/features/**/*.feature"],
  //
  // ============
  // Capabilities
  // ============
  // NOTE: This is just a place holder and will be overwritten by each specific configuration
  capabilities: [],
  //
  // ===================
  // Test Configurations
  // ===================
  logLevel: "debug",
  bail: 0,
  waitforTimeout: 10 * 1000,
  connectionRetryTimeout: 120 * 1000,
  connectionRetryCount: 3,
  services: [],
  framework: "cucumber",
  reporters: ["spec", "cucumberjs-json"],
  cucumberOpts: {
    timeout: 30 * 1000,
    require: ["./test/step-definitions/**/*.ts"],
    backtrace: true,
  },
  //
  // =====
  // Hooks
  // =====
  // Gets executed before config execution begins.
  beforeSession: () => {
    dns.setDefaultResultOrder("ipv4first");
  },
  before: () => {
    configDotEnv();
  },
  // Gets executed after a Cucumber Scenario.
  afterScenario: async (world, result) => {
    if (!result.passed) {
      CucumberJsJsonReporter.attach(
        await browser.takeScreenshot(),
        "image/png"
      );
      CucumberJsJsonReporter.attach(
        { "json-string": true },
        "application/json"
      );
    }
    data.clearData();
    await browser.reloadSession();
  },
  // Gets executed once before all workers get launched.
  onPrepare: () => {
    removeSync(".tmp/");
  },
  // Gets executed after all workers got shut down and the process is about to exit.
  onComplete: () => {
    generate({
      jsonDir: ".tmp/json/",
      reportPath: ".tmp/report/",
      pageTitle: "Web Automation - HTML Reporter",
      reportName: "Web Automation - HTML Reporter",
      displayDuration: true,
      displayReportTime: true,
    });
  },
};
