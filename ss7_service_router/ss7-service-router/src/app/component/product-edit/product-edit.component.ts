import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  rfDelete: FormGroup;
  id: number;
  product: Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      // @ts-ignore
      this.product = this.productService.findById(id);
      this.rfDelete = new FormGroup({
        id: new FormControl(this.id),
        name: new FormControl(this.product.name, [Validators.required]),
        price: new FormControl(this.product.price, [Validators.required]),
        description: new FormControl(this.product.description, [Validators.required])
      });
    });
  }

  update() {
    const product = this.rfDelete.value;
    this.productService.update(this.id, product);
    this.router.navigateByUrl('/product');
  }
}
