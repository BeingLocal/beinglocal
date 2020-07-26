import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../core/navigation/navigation.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  constructor(public navigation: NavigationService) {}

  ngOnInit(): void {}
}
