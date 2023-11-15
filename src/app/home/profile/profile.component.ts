import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  public title: string = "Who Am I?";

  // You can use a HTML tags in 'data'
  public profile: any =
    {
      title: 'Cover Letter:', data:
        '<p>I am a self-driven software developer with 10 years of experience in helping to deliver projects on time and on budget. I have a special interest in understanding the needs of business and translating that into elegant solutions,'
        + 'and providing a valuable product for business and translating that into elegant solutions, and providing a valuable product for business and translating that into elegant solutions, and providing a valuable product for '
        + 'the end-users. My focus for the last 6 years has been in front-end development specifically <b>Angular 7+, CSS, HTML, Angular material, Bootstrap</b>, and a few other technologies. I have a special interest for the dev-ops realm '
        + 'as well, with some experience in <b>Docker, Jenkins, Azure, Kubernetes</b></p>',
      contact: 'CONTACT', sp: 'SOCIAL PROFILES'
    };

  @Input() English: any;
  constructor() { }

  ngOnInit() {
    this.profile = this.profile;
  }


}
