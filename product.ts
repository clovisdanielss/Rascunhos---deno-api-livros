interface IProduct {
  getId(): number;
  getName(): string;
  getDesc(): string;
  getPrice(): number;
}

interface IBook {
  id: number;
  name: string;
  desc: string;
  price: number;
}

class Book implements IProduct {
  private id: number = 0;
  private name: string = "";
  private desc: string = "";
  private price: number = 0;

  constructor(props: IBook) {
    this.id = props.id;
    this.name = props.name;
    this.desc = props.desc;
    this.price = props.price;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDesc() {
    return this.desc;
  }

  getPrice() {
    return this.price;
  }

  toString() {
    return "Livro: " + this.name + "\n" + "Preço: " + this.price;
  }
}

export {IProduct, Book}
