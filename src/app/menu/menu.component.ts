import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
