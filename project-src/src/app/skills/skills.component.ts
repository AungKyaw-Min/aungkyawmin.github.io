import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  faLanguage = faLanguage;
  
  constructor() { }

  ngOnInit(): void {
  }

}
