import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Contract {
  Id: string;
  Name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  breakpoint: number;

  myHome : any
  tiles: Tile[] = [
    // {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    // {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'One', cols: 1, rows: 2, color: 'white'},
    {text: 'Two', cols: 1, rows: 2, color: 'white'},
    {text: 'Three', cols: 1, rows: 2, color: 'white'},
    {text: 'Four', cols: 1, rows: 2, color: 'white'},
    {text: 'Five', cols: 1, rows: 2, color: 'white'},
    {text: 'Six', cols: 1, rows: 2, color: 'white'},
    {text: 'Seven', cols: 1, rows: 2, color: 'white'},
    {text: '8', cols: 1, rows: 2, color: 'white'}
  ];
  

  contracts: Array<Contract> = [
    { 
      Id: '1',
      Name: 'Name 1'
    },
    { 
      Id: '2',
      Name: 'Name 2'
    },
    
  ];

  constructor() { }



  ngOnInit(): void {
    this.myHome = JSON.parse(localStorage.getItem('currentUser'));
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    var cardImagePath = this.myHome.photoUrl
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

}
