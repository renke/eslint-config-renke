/*global describe, it*/
import {expect} from "chai";

import eslintConfigRenke from "../src";

describe("eslintConfigRenke", () => {
  it("should return foo", () => {
    expect(eslintConfigRenke()).to.equal("foo");
  });
});
