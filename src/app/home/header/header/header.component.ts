import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuEnglish: any = {
    home: 'HOME',
    profile: 'PROFILE',
    skills: 'SKILLS',
    resume: 'RESUME',
    education: 'EDUCATION'
  };

  public menu: any = this.menuEnglish;

  isNavbarCollapsed: boolean = true;
  English: boolean = true;

  constructor() { }


  ngOnInit() {
    this.menu = this.menuEnglish;
  }

}