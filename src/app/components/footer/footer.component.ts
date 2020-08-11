import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public current_year: number;

  constructor() { }

  ngOnInit(): void {
    this.current_year = new Date().getFullYear();
  }

}