import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  categaries: Array<object> = [];

  constructor() { }

  ngOnInit() {
    this.categaries = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }, { f: 6 }];
  }

  abc(event) {
    alert('Hi' + event);
  }

}
