"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var chai_1 = require("chai");

var lib_1 = require("../lib");

var lib_2 = require("../lib");

var mock_1 = require("./mock");

require("mocha");

describe("tree2array", function () {
  it("should exist", function () {
    chai_1.expect(lib_1.tree2array).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_1.tree2array).to.be.a("function");
  });
});
describe("tree2object", function () {
  it("should exist", function () {
    chai_1.expect(lib_2.tree2object).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_2.tree2object).to.be.a("function");
  });
});
describe("tree2array", function () {
  it("should map 'a' node of tree to an array", function () {
    var a_array = lib_1.tree2array("a", mock_1.TreeMock.value, mock_1.TreeMock.nodes);
    chai_1.expect(a_array).to.deep.eq(["α"]);
  });
  it("should map 'b' node of tree to an array", function () {
    var b_array = lib_1.tree2array("b", mock_1.TreeMock.value, mock_1.TreeMock.nodes);
    chai_1.expect(b_array).to.deep.eq(["β", ["i", [0]], ["j", [1]], ["k", [2]]]);
  });
  it("should map 'c' node of tree to an array", function () {
    var c_array = lib_1.tree2array("c", mock_1.TreeMock.value, mock_1.TreeMock.nodes);
    chai_1.expect(c_array).to.deep.eq(["γ", ["x", ["ξ", ["y", ["υ", ["z", ["ζ"]]]]]]]);
  });
  it("should map root node of tree to an array", function () {
    var array = lib_1.tree2array(null, mock_1.TreeMock.value, mock_1.TreeMock.nodes);
    chai_1.expect(array).to.deep.eq([undefined, ["a", ["α"]], ["b", ["β", ["i", [0]], ["j", [1]], ["k", [2]]]], ["c", ["γ", ["x", ["ξ", ["y", ["υ", ["z", ["ζ"]]]]]]]]]);
  });
});
describe("tree2object", function () {
  it("should map 'a' node of tree to a string", function () {
    var a_object = lib_2.tree2object("a", mock_1.TreeMock.value, mock_1.TreeMock.nodes);
    chai_1.expect(a_object).to.deep.eq("α");
  });
  it("should map 'b' node of tree to an object", function () {
    var b_object = lib_2.tree2object("b", mock_1.TreeMock.value, mock_1.TreeMock.nodes);
    chai_1.expect(b_object).to.deep.eq({
      _: "β",
      i: 0,
      j: 1,
      k: 2
    });
  });
  it("should map 'c' node of tree to an object", function () {
    var c_object = lib_2.tree2object("c", mock_1.TreeMock.value, mock_1.TreeMock.nodes);
    chai_1.expect(c_object).to.deep.eq({
      _: "γ",
      x: {
        _: "ξ",
        y: {
          _: "υ",
          z: "ζ"
        }
      }
    });
  });
  it("should map root node of tree to an object", function () {
    var object = lib_2.tree2object(null, mock_1.TreeMock.value, mock_1.TreeMock.nodes);
    chai_1.expect(object).to.deep.eq({
      a: "α",
      b: {
        _: "β",
        i: 0,
        j: 1,
        k: 2
      },
      c: {
        _: "γ",
        x: {
          _: "ξ",
          y: {
            _: "υ",
            z: "ζ"
          }
        }
      }
    });
  });
});
//# sourceMappingURL=test.js.map