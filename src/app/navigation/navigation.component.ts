import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navbarOpen = false;
  username = '';

  constructor() { }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit(): void {
  }

}
