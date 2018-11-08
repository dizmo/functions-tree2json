import { expect } from "chai";
import { tree2json } from "../lib";

import "mocha";

describe("index.id", () => {
    it("should exist", () => {
        expect(tree2json).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(tree2json).to.be.a("function");
    });
});
