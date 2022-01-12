const Class = Basket("../src/basket.js");

describe("Basket", () => {
  let classToBeTested

  beforeEach(() => {
    Basket = new Basket();
  });

  it("basket is empty", () => {
      const expected = []
      const result = Basket
    expect(result).toEqual(expected);
  });
});