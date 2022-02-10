import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  links = [
    {
      name :  'Ссылки'
    },
    {
      name :  'Контакты'
    },
    {
      name :  'Теги'
    },
    {
      name :  'Просьбы'
    },
    {
      name :  'Избранное'
    },
    {
      name : 'Посещение'
    }
    ]
}
