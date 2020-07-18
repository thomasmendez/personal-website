import { Component, OnInit } from '@angular/core';

import { Work } from '../../../models/Work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})

export class WorkComponent implements OnInit {

  public title : string = "Where I Worked";

  public jobs : Work[];

  constructor() { }

  ngOnInit(): void {

    this.jobs = [
      {
        jobTitle:"Software Engineer",
        company:"Surfboard",
        city:"Richardson",
        state:"Texas",
        startDate:"June 2019",
        endDate:"March 2020",
        jobRole:"Software Engineer / Mobile Augmented Reality Developer (Android & iOS)",
        jobDuties: [
          "Prototyped persistent world-scale augmented reality using ARCore and ARKit",
          "Prototyped Instagram like gestures for 3D object/text manipulation in ARKit",
          "Designed and documented reusable modules for Android and iOS prototypes using MVC architecture",
          "Used unit and integration test for parts of the augmented reality prototype for Android and iOS",
          "Used agile methodology and rapid prototyping practices"
        ]
      },
      {
        jobTitle:"Provisioning Automation for Oracle Cloud Infrastructure Intern​",
        company:"Accenture",
        city:"Irving",
        state:"Texas",
        startDate:"​June 2018",
        endDate:"Aug 2018",
        jobRole:"Support Analyst (DevOps Engineer Intern)",
        jobDuties: [
          "Worked in the development of creating a provisioning tool using Terraform, APEX, and RESTful Services, which would drive the provisioning of resources in Oracle Cloud Infrastructure",
          "Created reusable Terraform modules for team use"
        ]
      },
      {
        jobTitle:"Video Game Development for Research",
        company:"SAGA Lab",
        city:"SAGA Lab,",
        state:"Texas",
        startDate:"January 2018",
        endDate:"May 2018",
        jobRole:"#C Unity Programmer",
        jobDuties: [
          "Modified an existing video game developed at the SAGA Lab to meet the needs for a research study at the university",
          "Re-programmed certain game scripts and created new 2D and 3D assets to fit the needs of the research"
        ]
      }
    ]

  }

}
