class Basket {
  constructor() {
    this.contents = [];
    this.IDcounter = 0;
  }

  addBagel() {
    //we want to add bagel into basket array
    this.IDcounter ++
    let bagelItem = {
        id: this.IDcounter,
        name: "blt",
        price: 1.99,
    }
    this.contents.push(bagelItem)
    return this.contents
}

  removeBagel(id) {
    for (let i = 0; i < this.contents.length; i++) {
      if (this.contents[i].id === id) {
        this.contents.splice([i], 1);
      }
    }
    return this.contents;
  }
}

module.exports = Basket;
