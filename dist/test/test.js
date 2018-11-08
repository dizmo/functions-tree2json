"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var lib_1 = require("../lib");
require("mocha");
describe("index.id", function () {
    it("should exist", function () {
        chai_1.expect(lib_1.tree2json).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_1.tree2json).to.be.a("function");
    });
});
//# sourceMappingURL=test.js.map