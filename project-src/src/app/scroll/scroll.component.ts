import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  i: string;

  constructor() { }

  ngOnInit(): void {
  }

  scroll(i) {
    document.getElementById(i).scrollIntoView();
  }
}
