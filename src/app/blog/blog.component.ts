import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  show = true;
  constructor() { }

  expand(): void {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

}
