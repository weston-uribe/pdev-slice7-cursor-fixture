import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { incomplete } from "./incomplete.ts";

describe("incomplete", () => {
  it("implements the incomplete fixture function", () => {
    assert.doesNotThrow(() => incomplete());
  });
});
