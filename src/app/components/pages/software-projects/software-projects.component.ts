import { Component, OnInit } from '@angular/core';

import { SoftwareProjects } from '../../../models/SoftwareProjects';

@Component({
  selector: 'app-software-projects',
  templateUrl: './software-projects.component.html',
  styleUrls: ['./software-projects.component.css']
})
export class SoftwareProjectsComponent implements OnInit {

  public title : string = "Software Engineering Projects";

  public projects : SoftwareProjects[];

  constructor() { }

  ngOnInit(): void {

    this.projects = [
      {
        title:"Open-LMS-Blended",
        description:"An open source learning management system intended for K-12 educational institutions.",
        myTasks:[
          "Developed an open source LMS intended for K-12 educational institutions using the MERN stack",
          "Experienced the entire development lifecycle, deployed, and documented the entire application for both Digital Ocean and AWS"
        ],
        teamSize:1,
        teamRoles:[],
        cloudServices:[
          "AWS",
          " Digital Ocean"
        ],
        tools:[
          "MongoDB",
          " Express",
          " React.js",
          " Node.js"
        ],
        projectDuration:"3 Months",
        startDate:"March 2020",
        endDate:"May 2020",
        repository:"https://github.com/thomasmendez/open-lms-blended",
        website:"https://open-lms-blended.org/",
        image:"",
        videoLink:"assets/open-lms-blended-sample.mp4",
        note:""
      },
      {
        title:"Noble Prizes Website",
        description:"Dynamic website that shows information about different laureates, countries that they are from, and different noble prize categories they won.",
        myTasks:[
          "Create a dynamic website showcasing all the laureates, their awards, and their country of origin with a team of 5",
          "Worked with SQLAlchemy and the Google Cloud Platform to make sure webpages were deployed properly",
          "Developed static pages using HTML and CSS"
        ],
        teamSize:5,
        teamRoles:[
          "Front-End Development",
          "Back-End Development",
          "Unit Testing and Continous Integration",
          "GCP Deployment"
        ],
        cloudServices:[
          "Google Cloud Platform"
        ],
        tools:[
          "HTML",
          " CSS",
          " Bootstrap",
          " Javascript",
          " Flask",
          " SQL Alchemy",
          " Postgres"
        ],
        projectDuration:"7 Weeks",
        startDate:"10/14/2018",
        endDate:"12/02/2018",
        repository:"https://gitlab.com/thomasmendez/cs329e-idb",
        website:"",
        image:"assets/laureates.png",
        videoLink:"",
        note:"Website currently not running because of the expensive cost of App Engine"
      },
      {
        title:"Custom Clothing Brand Website",
        description:"Dynamic clothing brand website that allows users to browse the brand's selection of products. Users can interact with the website to place orders, contact the brand, add products to their cart, and see all products available through a database.",
        myTasks:[
          "Worked with another full-stack developer to create a potential website for a future clothing brand",
          "Used the LAMP (Linux-Apache-MySQL-PHP) stack to develop the application"
        ],
        teamSize:2,
        teamRoles:[
          "Full-Stack Development"
        ],
        cloudServices:[

        ],
        tools:[
          "HTML",
          " CSS",
          " Bootstrap",
          " Javascript",
          " Linux",
          " Apache",
          " MySQL",
          " PHP"
        ],
        projectDuration:"8 Weeks",
        startDate:"10/24/2018",
        endDate:"12/12/2018",
        repository:"",
        website:"",
        image:"assets/lcm.png",
        videoLink:"",
        note:"Website no longer avaliable since July 2020"
      }
    ]
  }
}
