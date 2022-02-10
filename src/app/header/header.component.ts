import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active: boolean = false;
  constructor() {}
  clickEvent() {
    this.active = !this.active;
  }

  ngOnInit(): void {}
}
