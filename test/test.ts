import { expect } from "chai";
import { tree2array } from "../lib";
import { tree2object } from "../lib";

import "mocha";

class TreeMock {
    public static value(path: string | null) {
        switch (path) {
            case null:
                return undefined;
            case "a":
                return "α";
            case "b":
                return "β";
            case "b/i":
                return 0;
            case "b/j":
                return 1;
            case "b/k":
                return 2;
            case "c":
                return "γ";
            case "c/x":
                return "ξ";
            case "c/x/y":
                return "υ";
            case "c/x/y/z":
                return "ζ";
            default:
                return undefined;
        }
    }
    public static nodes(path: string | null): string[] {
        switch (path) {
            case null:
                return ["a", "b", "c"];
            case "a":
                return [];
            case "b":
                return ["i", "j", "k"];
            case "c":
                return ["x"];
            case "c/x":
                return ["y"];
            case "c/x/y":
                return ["z"];
            case "c/x/y/z":
                return null as any;
            default:
                return undefined as any;
        }
    }
}

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
    it("should map 'a' node of tree to an object", () => {
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
