import { Component, OnInit } from '@angular/core';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent implements OnInit {
  faHandPointRight = faHandPointRight;

  constructor() { }

  ngOnInit(): void {
  }

}
