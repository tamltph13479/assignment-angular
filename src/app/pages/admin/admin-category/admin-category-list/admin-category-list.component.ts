import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryType } from 'src/app/types/category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  categorys: CategoryType[];
  constructor(private categoryService: CategoryService) {
    this.categorys = [];
  }

  ngOnInit(): void {
    // với kiểu dữ liệu trả về là Observable thì có phương thức subscribe để lắng nghe
    // bao giờ có kết quả sẽ trả về qua tham số và thực thi tiếp
    this.onGetList();
  }
  onGetList() {
    this.categoryService.getCategorys().subscribe((data) => {
      this.categorys = data;
    });
  }
  onDelete(id: string) {
    // confirm
    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');

    if (confirmDelete && id) {
      // Nếu có id thì xoá -> thực hiện call API xoá
      this.categoryService.deleteCategory(id).subscribe((data) => {
        console.log(data); // {}
        // Cập nhật lại dữ liệu mới
        this.onGetList();
      })
    }

  }
}
