import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})


export class HomeClientComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://thietkehosonangluc.edu.vn/uploads/images/thiet-ke-do-hoa-khac/banner-sach/1.png`, `https://sachsuthattphcm.com.vn/wp-content/uploads/2020/11/banner.jpg`);
  constructor() { }

  ngOnInit(): void {
  }

}
