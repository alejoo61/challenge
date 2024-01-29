import { describe, assert, it } from "vitest";
import {minChange} from "./minChange"; // Asegúrate de usar la ruta correcta

describe("minChange", () => {
  it("Debe ser una función", () => {
    assert.isFunction(minChange, "minChange no es una función");
  });

  it("Retorna el cambio mínimo correctamente", () => {
    const coins = [1, 2, 5];
    const result = minChange(coins);
    assert.equal(
      result,
      4,
      "El resultado no coincide con el cambio mínimo esperado"
    );
  });

  it("Retorna el cambio mínimo cuando las monedas son iguales", () => {
    const coins = [1, 1, 1, 1];
    const result = minChange(coins);
    assert.equal(
      result,
      5,
      "El resultado no coincide con el cambio mínimo esperado"
    );
  });

  it("Retorna el cambio mínimo cuando hay monedas grandes", () => {
    const coins = [10, 50, 100];
    const result = minChange(coins);
    assert.equal(
      result,
      1,
      "El resultado no coincide con el cambio mínimo esperado"
    );
  });
});
