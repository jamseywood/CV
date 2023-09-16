import {Component} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  constructor() { }
  public head: any = { title: 'Educatopm', subtitle: 'PERSONAL EDUCATION & ACHIEVEMENTS' };

  


  public awardsEnglish: any = [
    {
      title: 'Bachelor Degree',
      name: 'Monash Bachelor of Information and Technology - 2014'
    },
    {
      title: 'AWARD',
      name: '1st place in FNB CodeFest South Africa - 2016'
    },
    {
      title: 'OCAJP',
      name: 'Oracle Java 8 certified associate - 2018'
    },
    {
      title: 'Diploma',
      name: 'SOFTWARE DEVELOPMENT - 2011'
    },
    {
      title: 'COURSE',
      name: 'oracle ADF with Jernj Kruse - 2013'
    },
    {
      title: 'COURSE',
      name: 'Project management with iLab - 2014'
    },
    {
      title: 'COURSE',
      name: 'Public speaking iLab - 2014'
    },
  ];
  
  public awards: any = this.awardsEnglish;

}
