import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-progess',
  templateUrl: './spinner-progess.component.html',
  styleUrls: ['./spinner-progess.component.css']
})
export class SpinnerProgessComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;

  constructor() { }

  ngOnInit() {
  }

}
