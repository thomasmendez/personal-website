import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'personal-website';
  title = 'Thomas A Mendez';

  public constructor(private titleService: Title ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }
}