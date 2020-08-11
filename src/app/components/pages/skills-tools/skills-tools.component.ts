import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-tools',
  templateUrl: './skills-tools.component.html',
  styleUrls: ['./skills-tools.component.css']
})
export class SkillsToolsComponent implements OnInit {

  public title : string = "Skills & Tools"

  public keepOriginalOrder = (a, b) => a.key

  public skills: {[key:string]:Array<string>}

  public tools: {[key:string]:Array<string>}

  constructor() { }

  ngOnInit(): void {

    this.skills = {
      "Trilingual":["English", " Spanish", " Portuguese"],
      "Software Methodologies and Practices":["Agile", " Scrum", " Rapid Prototyping"],
      "Design Thinking":["IBM Enterprise Design Thinking"]
    }

    this.tools = {
      "Game Engines": ["Unity"],
      "Programming Languages": ["Python", " C#", " Swift", " Java"],
      "Front-End": ["HTML", " CSS", " Javascript", " ES6", " React.js", " Webpack", " Babel", " Angular", " Bootstrap", " Pug"],
      "Back-End": ["Node.js", " PHP", " Flask", " SQLAlchemy"],
      "Databases": ["MySQL", " PL/SQL", " Postgres", " MongoDB"],
      "Mobile Development": ["iOS (XCode)", " Android (Android Studio)"],
      "Unit Testing": [ "unittest (Python)", " Mocha", " Jasmine", " Chai", " Enzyme", " Junit", " XCTest"],
      "CI/CD Tools": ["Jenkins", " Gitlab CI", " Github Actions", " Docker"],
      "Data Mining": ["Classification", " Clustering", " Association Analysis", " Dimensionality Reduction"],
      "OS": [ "Windows", " macOS", " Linux (Ubuntu)"]
    }

  }

}
