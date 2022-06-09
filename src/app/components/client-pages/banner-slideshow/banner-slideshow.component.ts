import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-slideshow',
  templateUrl: './banner-slideshow.component.html',
  styleUrls: ['./banner-slideshow.component.css']
})
export class BannerSlideshowComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://thietkehosonangluc.edu.vn/uploads/images/thiet-ke-do-hoa-khac/banner-sach/1.png`);

  constructor() { }

  ngOnInit(): void {
  }

}
