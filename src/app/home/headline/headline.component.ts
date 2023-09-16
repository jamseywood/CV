import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  @Input() English: any;
  public name: string = "JAMES WORWOOD";
  public titleEnglish: string = "SENIOR FRONT-END DEVELOPER";

  public title = this.titleEnglish;
  constructor() { }

  ngOnInit() {
    this.title = this.titleEnglish;
  }      

}
