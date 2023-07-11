import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  actions : Array<any> =[
    { title : "Home", "route":"/home",icon : "house"},
    { title : "Products", "route":"/products",icon : "search"},
    { title : "NewProduct", "route":"/newProduct",icon : "safe"}
  ]
}
