import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  msg: string = "";
  handleMessage() {
    this.msg = "Product has been created successfully";
  }
}
