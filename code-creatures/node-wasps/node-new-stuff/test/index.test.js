import assert from "node:assert/strict"
import { test } from "node:test"
import { func } from "../index.js"

test("func", async () => {
  assert.equal(func(), "some")
})
