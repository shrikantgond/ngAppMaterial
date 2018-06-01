import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
  }

  navToggle() {
    this.navigationService.IsSidenavOpen = !this.navigationService.IsSidenavOpen;
  }

}
