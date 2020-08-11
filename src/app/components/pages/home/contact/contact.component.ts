import { Component, OnInit } from '@angular/core';

import { Icon } from '../../../../models/Icon';
import { MyInfo } from '../../../../static/MyInfo';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public icons: Icon[];

  constructor() { }

  ngOnInit(): void {

    this.icons = MyInfo.myIcons;

  }

}
