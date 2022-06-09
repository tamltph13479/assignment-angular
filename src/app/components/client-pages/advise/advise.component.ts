import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryType } from 'src/app/types/category';

@Component({
  selector: 'app-advise',
  templateUrl: './advise.component.html',
  styleUrls: ['./advise.component.css']
})
export class AdviseComponent implements OnInit {

  category: CategoryType[];
  constructor(private categoryService: CategoryService) {
    this.category = [];
  }

  ngOnInit(): void {
    this.onGetList();
  }
  onGetList() {
    this.categoryService.getCategorys().subscribe((data) => {
      this.category = data;
      console.log(data)
    });
  }

}
