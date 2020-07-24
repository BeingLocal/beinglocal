import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../core/toolbar/toolbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public toolbarService: ToolbarService) {}

  ngOnInit(): void {
    this.toolbarService.show();
  }
}
