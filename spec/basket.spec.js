const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket;

  beforeEach(() => {
    basket = new Basket();
  });

  it("basket is empty", () => {
    const expected = [];
    const result = basket.contents;
    expect(result).toEqual(expected);
  });

  it("add item to basket", () => {
    const expected = [
      {
        id: 1,
        name: "blt",
        price: 1.99,
      },
    ];

    const result = basket.addBagel();

    expect(result).toEqual(expected);
  });
  it("add a second bagel to basket", () => {

    const expected = [{
      id: 1,
      name: "blt",
      price: 1.99
    },
    {
        id: 2,
        name: "blt",
        price: 1.99
      },
    ]
    basket.addBagel()
    const result = basket.addBagel()

  
  expect(result).toEqual(expected);
  });

  it("remove item from basket", () => {
    const expected = [];
    basket.addBagel();
    const result = basket.removeBagel(1);

    expect(result).toEqual(expected);
  });
});
