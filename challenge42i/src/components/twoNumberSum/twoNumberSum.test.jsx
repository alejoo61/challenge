import { describe, assert, it } from "vitest";
import {findPairWithSum} from "./findPairWithSum";

describe("findPairWithSum", () => {
  it("Should be a function", () => {
    assert.isFunction(findPairWithSum, "findPairWithSum no es una función");
  });

  it("encuentra el par correcto", () => {
    const numbers = [2, 7, 11, 15];
    const targetSum = 9;
    const result = findPairWithSum(numbers, targetSum);
    assert.deepEqual(
      result,
      [2, 7],
      "El resultado no coincide con el par esperado"
    );
  });

  it("retorna un array vacío si no encuentra el par", () => {
    const numbers = [3, 6, 8, 10];
    const targetSum = 15;
    const result = findPairWithSum(numbers, targetSum);
    assert.deepEqual(result, [], "El resultado no coincide con un array vacío");
  });
});
