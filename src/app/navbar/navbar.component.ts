import { Component, OnInit } from '@angular/core';
import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faAutoprefixer = faAutoprefixer;
}
