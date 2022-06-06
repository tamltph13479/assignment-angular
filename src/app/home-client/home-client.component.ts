import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})


export class HomeClientComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1000/500`);
  constructor() { }

  ngOnInit(): void {
  }

}
