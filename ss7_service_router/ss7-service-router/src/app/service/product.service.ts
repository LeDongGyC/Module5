import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone 12',
      price: 2400000,
      description: 'New'
    },
    {
      id: 2,
      name: 'Iphone 11',
      price: 1560000,
      description: 'Like New'
    },
    {
      id: 3,
      name: 'Iphone X',
      price: 968000,
      description: '97%'
    },
    {
      id: 4,
      name: 'Iphone 8',
      price: 754000,
      description: '98%'
    },
    {
      id: 5,
      name: 'Iphone 11 Pro',
      price: 1895000,
      description: 'Like New'
    }
  ];

  constructor() {
  }

  findAll(): Product[] {
    return this.products;
  }

  save(product: Product) {
    this.products.push({...product, id: this.products.length + 1});
  }

  findById(id: number) {
    this.products.filter(items => items.id === id);
  }

  update(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  delete(id: number) {
    this.products = this.products.filter(items => {
      return items.id !== id;
    });
  }
}
