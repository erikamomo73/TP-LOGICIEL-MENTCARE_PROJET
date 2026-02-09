import { Component } from '@angular/core';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
 selector:'app-root',
 standalone:true,
 imports:[SidebarComponent, NavbarComponent, RouterOutlet],
 templateUrl:'./app.component.html',
 styleUrls:['./app.component.css']
})
export class AppComponent{}
