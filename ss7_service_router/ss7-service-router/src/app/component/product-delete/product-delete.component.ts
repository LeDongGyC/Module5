import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  rfEdit: FormGroup;
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
      this.rfEdit = new FormGroup({
        id: new FormControl(this.id),
        name: new FormControl(this.product.name, [Validators.required]),
        price: new FormControl(this.product.price, [Validators.required]),
        description: new FormControl(this.product.description, [Validators.required])
      });
    });
  }

  delete() {
    const product = this.rfEdit.value;
    this.productService.update(this.id, product);
    this.router.navigateByUrl('/product');
  }

}
