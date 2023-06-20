import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.css']
})
export class SharedCardComponent implements OnInit {

  constructor() { }
  @Input() data:any=[]
  ngOnInit(): void {
  }

}
