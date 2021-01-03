import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-additional-navbar',
  templateUrl: './additional-navbar.component.html',
  styleUrls: ['./additional-navbar.component.css']
})
export class AdditionalNavbarComponent implements OnInit {

  lang;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  changeLang(lang): void {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

  navigateTo(path: Array<string>): void {
    this.router.navigate(path);
  }

}
