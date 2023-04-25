import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  rfProduct: FormGroup;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.rfProduct = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  add() {
    this.productService.save(this.rfProduct.value);
    this.router.navigateByUrl('/product');
  }
}
