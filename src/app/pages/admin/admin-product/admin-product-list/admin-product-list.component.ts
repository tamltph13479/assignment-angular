import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/products';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    // với kiểu dữ liệu trả về là Observable thì có phương thức subscribe để lắng nghe
    // bao giờ có kết quả sẽ trả về qua tham số và thực thi tiếp
    this.onGetList();
  }
  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  onDelete(id: string) {
    // confirm
    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');

    if (confirmDelete && id) {
      // Nếu có id thì xoá -> thực hiện call API xoá
      this.productService.deleteProduct(id).subscribe((data) => {
        console.log(data); // {}
        // Cập nhật lại dữ liệu mới
        this.onGetList();
      })
    }

  }

}
