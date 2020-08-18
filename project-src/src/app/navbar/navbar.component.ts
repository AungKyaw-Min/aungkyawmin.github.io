import { Component, OnInit, HostListener } from '@angular/core';
import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
  faBars = faBars;

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  scroll(i) {
    this.toggleNavbar();
    document.getElementById(i).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e){
    let element = document.querySelector('.navbar');
    
    if(window.pageYOffset > 80){
      // console.log(window.pageYOffset)
      // console.log(element.clientHeight)
      // element.classList.add('fadeInDown');
      // element.classList.add('animated');
      // element.classList.add('navbar-change');
    }
    else{
      element.classList.remove('navbar-change');
      element.classList.remove('fadeInUp');

    }
  }
}
