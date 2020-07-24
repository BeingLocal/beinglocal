import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../core/toolbar/toolbar.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  constructor(private toolbarService: ToolbarService) {}

  ngOnInit(): void {
    this.toolbarService.hide();
  }
}
