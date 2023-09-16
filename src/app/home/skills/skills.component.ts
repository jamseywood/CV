import { Component } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor() { }

  // TITLE 
  public headEnglish: any = { title: 'MY SKILLS', subtitle: 'SKILLS AND TOOLS' };
  public head: any = this.headEnglish;


  // ENGLISH
  public skill_1: any = [
    [{
      title: 'Angular 6 - 15',
      progress: 95
    }],
    [{
      title: 'Karma/Jasmine',
      progress: 90
    }],
    [{
      title: 'Material',
      progress: 90
    }],
    [{
      title: 'Bootstrap',
      progress: 90
    }],
    [{
      title: 'Agile & scrum methodologies',
      progress: 95
    }]
  ];

  public skill_2: any = [
    [{
      title: 'Cypress',
      progress: 80
    }],
    [{
      title: 'HTML/SCSS',
      progress: 90
    }],
    [{
      title: 'Tailwind',
      progress: 50
    }],
    [{
      title: 'RESTful APIs',
      progress: 90
    }],
    [{
      title: 'RxJs',
      progress: 85
    }]
  ];

  public skill_3: any = [
    [{
      title: 'React',
      progress: 50
    }],
    [{
      title: 'Vue.js',
      progress: 50
    }],
    [{
      title: 'DevExpress/DevExtreme',
      progress: 65
    }],
    [{
      title: 'micro front-ends (single-spa & module-federation)',
      progress: 70
    }]
  ];

  public skills: any = [
    { skills: this.skill_1 },
    { skills: this.skill_2 },
    { skills: this.skill_3 },
  ];

}
