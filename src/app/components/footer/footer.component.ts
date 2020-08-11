import { Component, OnInit } from '@angular/core';

import { Icon } from '../../models/Icon';
import { MyInfo } from '../../static/MyInfo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public current_year: number;

  public icons: Icon[];

  constructor() { }

  ngOnInit(): void {
    this.current_year = new Date().getFullYear();
    this.icons = MyInfo.myIcons;
  }

}