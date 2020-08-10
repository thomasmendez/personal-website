import { Component, OnInit } from '@angular/core';
import { VrArProjects } from '../../../models/VRARProjects';

@Component({
  selector: 'app-vr-ar-projects',
  templateUrl: './vr-ar-projects.component.html',
  styleUrls: ['./vr-ar-projects.component.css']
})
export class VrArProjectsComponent implements OnInit {

  public title : string = "Virtual Reality (VR) / Augmented Reality (AR) Projects";

  public projects : VrArProjects[]

  constructor() { }

  ngOnInit(): void {

    this.projects = [
      {
        title:'Ankhor (Room Scale VR Game)',
        description:'A room scale mystery / horror game where you are a doctor trapped in a hospital with strange robed beings. You are able to interact with your surroundings in VR, pick up mysterious objects to aid you in your escape, and you must stealthily avoid getting captured.',
        myTasks:[
          'Develop VR Game Mechanics and Interactions'
        ],
        teamSize:6,
        teamRoles:[
          '3 #C Unity Developers',
          '2 3D Modelers',
          '1 Game Designer',
          '1 Music Producer'
        ],
        tools:[
          'Unity',
          ' SteamVR Plugin',
          ' HTC Vive'
        ],
        projectDuration:'15 Weeks',
        startDate:'1/28/2019',
        endDate:'5/14/2019',
        website:'',
        image:'',
        videoLink:'assets/ankhor.mp4',
        download:'',
        note:'',
        platforms:'HTC Vive'
      },
      {
        title:'MarkAR (AR Prototype)',
        description:'An augmented reality application intended to show the user where they place down a certain 3D object (marker) in the real world. They can then find it later and be directed to where they placed it.',
        myTasks:[
          'Develop Entire AR App Functionality'
        ],
        teamSize:3,
        teamRoles:[
          'C# Programmer',
          '2D Artist',
          '3D Modeler'
        ],
        tools:[
          'Unity',
          ' Google Pixel'
        ],
        projectDuration:'15 Weeks',
        startDate:'9/3/2018',
        endDate:'12/18/2018',
        website:'https://socialar.weebly.com/',
        image:'',
        videoLink:'assets/markar.mp4',
        download:'',
        note:'',
        platforms:'Andriod'
      },
      {
        title:'Curffleboard (AR Game)',
        description:'An augmented reality game that allows users to play a game of curling using augmented reality technology. The game can be shared between two players with one phone.',
        myTasks:[
          'Create Win / Lose Conditions',
          'Develop 2 Player Functionality'
        ],
        teamSize:3,
        teamRoles:[
          'C# Programmer',
          '2D Artist',
          '3D Modeler'
        ],
        tools:[
          'Unity',
          ' Google Pixel'
        ],
        projectDuration:'6 Weeks',
        startDate:'3/19/2018',
        endDate:'5/1/2018',
        website:'',
        image:'',
        videoLink:'assets/curffleboard.mp4',
        download:'https://utexas.app.box.com/v/CurffleboardApk',
        note:'',
        platforms:'Android'
      },
      {
        title:'Tough Crowd (Room Scale VR Game)',
        description:'You are a bad comedian on stage and you are trying to avoid objects that the audience throws at you. You have to hold off the crowd until your crew closes the curtains for the stage.',
        myTasks:[
          'Develop VR Game Mechanics and Interactions',
          'Created, Rigged, and Animated Enemies'
        ],
        teamSize:3,
        teamRoles:[
          '2 C# Programmers',
          '3D Modeler'
        ],
        tools:[
          'Unity',
          ' SteamVR Plugin',
          ' HTC Vive'
        ],
        projectDuration:'5 Weeks',
        startDate:'2/13/2018',
        endDate:'3/19/2018',
        website:'',
        image:'',
        videoLink:'assets/toughcrowd.mp4',
        download:'https://utexas.app.box.com/s/d4zsulbdt0sxgd4jv8h7civgbcqvtsz5',
        note:'',
        platforms:'HTC Vive'
      }
    ]
  }
}
