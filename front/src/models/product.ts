export class Product {
  id: number;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;

  constructor() {
    this.id = 0;
    this.code = '';
    this.name = '';
    this.description = '';
    this.image = '';
    this.price = 0;
    this.category = '';
    this.quantity = 0;
    this.inventoryStatus = '';
    this.rating = 0;
  }
}
