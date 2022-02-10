import { Component, OnInit } from "@angular/core";

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
      name :  "Ссылки",
      icon : "fas fa-sort-down"
    },
    {
      name :  "Контакты"
    },
    {
      name :  "Теги",
      icon : "fas fa-sort-down"
    },
    {
      name :  "Просьбы",
      icon : "fas fa-sort-down"
    },
    {
      name :  "Избранное",
      icon : "fas fa-sort-down"
    },
    {
      name : "Посещение",
      icon : "fas fa-sort-down"
    }
    ]
}
