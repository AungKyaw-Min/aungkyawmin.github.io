import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aung Kyaw Min';


  constructor(private titleService: Title) {
    titleService.setTitle("Aung Kyaw Min | Software Engineer");
  }

 
}
