import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() logoSrc = ''
  @Input() itemsList: string[] = ['Home', 'About', 'Log in']
  constructor() { }

  ngOnInit(): void {
  }

}
