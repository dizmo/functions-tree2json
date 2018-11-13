import { expect } from "chai";
import { tree2array } from "../lib";
import { tree2object } from "../lib";
import { TreeMock } from "./mock";

import "mocha";

describe("tree2array", () => {
    it("should exist", () => {
        expect(tree2array).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(tree2array).to.be.a("function");
    });
});

describe("tree2object", () => {
    it("should exist", () => {
        expect(tree2object).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(tree2object).to.be.a("function");
    });
});

describe("tree2array", () => {
    it("should map 'a' node of tree to an array", () => {
        const a_array = tree2array(
            "a", TreeMock.value, TreeMock.nodes);
        expect(a_array).to.deep.eq(
            ["α"],
        );
    });
    it("should map 'b' node of tree to an array", () => {
        const b_array = tree2array(
            "b", TreeMock.value, TreeMock.nodes);
        expect(b_array).to.deep.eq(
            ["β", ["i", [0]], ["j", [1]], ["k", [2]]],
        );
    });
    it("should map 'c' node of tree to an array", () => {
        const c_array = tree2array(
            "c", TreeMock.value, TreeMock.nodes);
        expect(c_array).to.deep.eq(
            ["γ", ["x", ["ξ", ["y", ["υ", ["z", ["ζ"]]]]]]],
        );
    });
    it("should map root node of tree to an array", () => {
        const array = tree2array(
            null, TreeMock.value, TreeMock.nodes);
        expect(array).to.deep.eq([
            undefined,
            ["a", ["α"]],
            ["b", ["β", ["i", [0]], ["j", [1]], ["k", [2]]]],
            ["c", ["γ", ["x", ["ξ", ["y", ["υ", ["z", ["ζ"]]]]]]]],
        ]);
    });
});

describe("tree2object", () => {
    it("should map 'a' node of tree to a string", () => {
        const a_object = tree2object(
            "a", TreeMock.value, TreeMock.nodes);
        expect(a_object).to.deep.eq(
            "α",
        );
    });
    it("should map 'b' node of tree to an object", () => {
        const b_object = tree2object(
            "b", TreeMock.value, TreeMock.nodes);
        expect(b_object).to.deep.eq({
            _: "β", i: 0, j: 1, k: 2,
        });
    });
    it("should map 'c' node of tree to an object", () => {
        const c_object = tree2object(
            "c", TreeMock.value, TreeMock.nodes);
        expect(c_object).to.deep.eq({
            _: "γ", x: {_: "ξ", y: {_: "υ", z: "ζ"}},
        });
    });
    it("should map root node of tree to an object", () => {
        const object = tree2object(
            null, TreeMock.value, TreeMock.nodes);
        expect(object).to.deep.eq({
            a: "α",
            b: {_: "β", i: 0, j: 1, k: 2},
            c: {_: "γ", x: {_: "ξ", y: {_: "υ", z: "ζ"}}},
        });
    });
});
