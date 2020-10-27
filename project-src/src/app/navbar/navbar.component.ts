import { Component, OnInit, HostListener } from '@angular/core';
import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // innerHeight: any;
 

  constructor() { }

  ngOnInit(): void {
    // this.innerHeight = window.innerHeight;
  }

//   @HostListener('window:resize', ['$event'])
// onResize(event) {
//   this.innerHeight = window.innerHeight;
// }

  faAutoprefixer = faAutoprefixer;
  faBars = faBars;
  navbarOpen = false;
  // vh: any;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  scroll(i) {
    this.toggleNavbar();
    document.getElementById(i).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  // getVh(height_in_px) {
  //   this.vh = innerHeight*0.01;
  //   return (height_in_px/ this.vh);
  // }

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
      // element.classList.remove('navbar-change');
      // element.classList.remove('fadeInUp');

    }
  }
}
