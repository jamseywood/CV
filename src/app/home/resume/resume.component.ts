import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public jobs: Job[];

  public head: any = { title: 'RESUME', subtitle: 'MY EDUCATION AND EXPERIENCE' };

  constructor() {

    const job_1: Job = new Job('Senior Angular Developer', '2021-2023', 'EBRD(European Bank of Reconstruction and Development)',
      '<P> My main focus when joining the team was to to help deliver new features and develop'
      + 'their micro front-end <b>single-spa</b> application as well as continue build on their already'
      + 'existing in house component library that was built on material.I also continued to grow the unit <b>test coverage to 80% and above</b>'
      + 'across all applications that our team owned using <b>Karma</b> and <b>Jasmine</b>. I was then'
      + 'included in upgrading all applications to latest angular and then migrating all micro'
      + 'front-end applications from single-spa to <b>Module Federation</b> (25 different micro frontends), while still maintaining the single-spa functionality until the work had been complete'
      + 'at which time we could turn off the single-spa container application. My role included'
      + 'helping other developers across 5 international teams within the bank to deliver features'
      + 'and maintain code quality as well as helping out with devlops issues such as ingress files'
      + 'not being setup correctly in <b>Kubernetes</b> or broken <b>Jenkins pipelines</b>. I often helped with releases, and'
      + 'end user support issues which included investigating <b>Kibana</b> logs and exploring potential'
      + 'data issues. During my time at EBRD I also setup <b>Cypress</b> E2E tests as well as intergrate'
      + 'them as part of our build pipelines when releasing applications to testing environments </p>'
      , 1);


    const job_2: Job = new Job('Senior Front-end Developer (React & Vue.js)', '2022-2023', 'Samba Saftey (based in USA)',
      '<P>My role was to help stabalize the application initially as there were a lot of complications when they started consuming real data from their partners. Once the application was stablizaed '
      + 'my role transitioned to implemented new features in to their already existing micro front-end <b>single-spa</b> application built in <b>React</b> and <b>Vue.js</b>. The project was focused on retrieving vehicle fleet data '
      + 'and generate reports for buisness to provide insight into their fleets performance. The backend was built in Java and I often helped out with debugging missing or broken data models</p>', 1);


    const job_3: Job = new Job('Senior Angular Developer', '2021-2022', 'Collision Management Systems',
      '<P>I was brought in to build and complete this start ups MVP in order for them to be able to recieve their next round of funding. Their MVP was a complete admin portal where theier customers are to add their organisations '
      + 'and users and setup their roles and permissions for interaction with our application. This was succefully implemented and taken to production. I think built out a strong front-end team where we built core funcationality for the '
      + 'business including easy to understand statistical pages using <b>ng-charts</b> and <b>chart.js</b>,We implemented webhook intergration features and accident reconstruction maps. We also introducted state management using '
      + '<b>NGRX</b> and built custom components with <b>Material</b></P>', 1);



    const job_4: Job = new Job('Senior Angular Developer', '2021', 'Vashi',
      '<P>I joined the team with goal to take over the project from a consulting company with the '
      + 'view of a like for like green pastures re-write from what was implemented with the 3rd '
      + 'party consulting company. My focus was shared between the front-end infrastructure '
      + 'and the feature team. My day to day responsbility varied from things such as optimizing '
      + 'our webpack configurations. fixing build profiles, to helping get features finished on time, '
      + 'defect resolution as well as some business facing support</p>'
      + '', 1);


    const job_5: Job = new Job('Senior Front-end Developer', '2020', 'AirOps/Gamma Aviation ',
      '<P>I joined the core engineering team with my main focus in developing key features needed '
      + 'to complete sales pipelines. I helped set and maintain development '
      + 'standards for our integrations with 3rd party services as well as our backend teams. I '
      + 'have also helped in creating standards and wikis for onboarding new developers and '
      + 'helping full stack developers understand our way of working. I also played a key role in '
      + 'bug support. </p>', 1);


    const job_6: Job = new Job('Senior Angular Developer', '2020', 'MY HSM',
      '<P>I joined the team in early stages of project creation. I played a key role in developing core '
      + 'features for the company&prime;s portal application which their customers '
      + 'would be using to secure their transactions. My focus was developing customer facing '
      + 'features in Angular using Angular Material/Bootstrap, talking RESTful services exposed '
      + 'by the PHP Laravel backend. I worked very closely with the business units to successfully '
      + 'release the portal into production. </P>', 1);

    const job_7: Job = new Job('Full-stack Developer', '2020', 'Medscheme (South Africa)',
      '<P>I was asked to join the project to assist in completing an Angular, Spring Boot Java '
      + 'project that was behind schedule. My responsibilities were to ascertain what '
      + 'functionality was business critical and help complete critical functionality in order to '
      + 'deliver a working product on time. The project was successfully delivered '
      + 'on time in April 2018 at which time we focused on stabilising the application and '
      + 'finishing other functionality, the project went into maintenance mode from October '
      + '2018. <br><br>'
      + 'The teams next project was to re-develop the main call centre application. My role was '
      + 'creating the projects in Bitbucket, Dockerizing them, setting up the Docker registry and '
      + 'deploying to Kubernetes pods using the Jenkins build pipelines to automate our builds '
      + 'and deployments to each environment. I also helped in breaking up the logic for '
      + 'the different business units that would be using the different application areas into '
      + 'separate API layer projects. We created a container project for the front '
      + 'end Angular project using Git Submodules, this allowed for all teams to develop in '
      + 'parallel, making reusable components, and create a uniform styling for the entire '
      + 'application. <br><br>'
      + 'In January 2019 I was asked to help out another team within the organisation, in rescuing '
      + 'a project as it was running behind schedule. '
      + 'They had already purchased a product to manage and master the data we were injesting, '
      + 'so they were de-compiling the code to be able to modify it in a way that would provide '
      + 'a meaningful solution to the business. This was a master-data-management type project, '
      + 'and this was adding unnecessary complexity. We decided to only use the product to '
      + 'manage the storage of data, and develop our own Spring Boot REST Services layer to '
      + 'integrate with a new Angular front end project that we could be incorporated into the '
      + 'greater container project that I mentioned earlier. I developed the Angular '
      + 'components, helped with some of the styling throughout the application. I managed all '
      + 'of the DevOps for the team, which included creating the Java EE/SE '
      + 'front end project, creating the Jenkins pipelines, Dockerizing the applications and '
      + 'creating deployments and pods for Kubernetes. </P>', 1);

    const job_8: Job = new Job('Full-stack Developer', '2017', 'Standard Bank (South Africa)',
      '<P>During my time at Wesbank I was involved in a few different projects. My first project was '
      + 'to help develop and deploy an e-commerce ADF application into WebCenter and '
      + 'WebLogic. I was involved in the development styling and defect resolution. This project '
      + 'was successfully completed and then it was decided to re-write the application again, '
      + 'but this time into Java EE. I was part of the team that redesigned the entire system and '
      + 'developed it to use a JSF front-end incorporating Bootstrap to style our pages. We broke '
      + 'up the back end projects into different layers and developed them using SOAP services. '
      + 'This allowed us to expose a single API layer that we can then, from different projects, '
      + 'consume services from. Wesbank was a division of the First Rand Group, which had a '
      + 'brother bank called FNB. They wanted to consume some of these services and I was '
      + 'included in the team tasked to expose certain services from our API layer to group level '
      + 'infrastructure. This allowed them to securely call our backend services and allowed them '
      + 'to add functionality to their different banking apps. My role was also implementing '
      + 'continuous integration with Jenkins for all of our different projects. I did the migrations '
      + 'from Artifactory to Nexus. I also did end of line support for most of the applications that '
      + 'fell under our teams realm.. </P>', 1);

    const job_9: Job = new Job('ADF Developer', '2014', 'REDISA (South Africa)',
      '<P>Having successfully taken this product to production, the stakeholders decided to rewrite the entire system using the Fusion Middleware stack. My role was to help build '
      + 'what was originally done in PHP into ADF, and then deploy the working application into '
      + 'WebCenter where I was able to then skin the application before also documenting and '
      + 'providing training manuals for the new system. </P>', 1);

    const job_10: Job = new Job('Junior ADF Developer', '2013-2014', 'Gijima (South Africa)',
      '<P>I joined the team in early stages of project creation. I played a key role in developing core '
      + 'features for the company&prime;s portal application which their customers '
      + 'would be using to secure their transactions. My focus was developing customer facing '
      + 'features in Angular using Angular Material/Bootstrap, talking RESTful services exposed '
      + 'by the PHP Laravel backend. I worked very closely with the business units to successfully '
      + 'release the portal into production. </P>', 1);

    const job_11: Job = new Job('Junior PHP Developer', '2012-2013', 'REDISA (South Africa)',
      '<P>This was a government funded start-up company that created infrastructure to recycle '
      + 'and reuse tyres. My main role was to help develop business solutions and then transform '
      + 'them into working modules for a greater web application. The front end was mainly '
      + 'coded in PHP and JavaScript, run on an Apache server with an underlying Oracle '
      + 'database. </P>', 1);


    this.jobs = [job_1, job_2, job_3, job_4, job_5, job_6, job_7, job_8, job_9, job_10, job_11];
  }



  ngOnInit() {
  }
}
