import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  constructor() {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      img: new FormControl(''),
      price: new FormControl(0),
      description: new FormControl(''),

    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.productForm.value);

  }
}
