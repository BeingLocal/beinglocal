import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '../../../core/navigation/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showSearchBox: true;

  constructor(public navigation: NavigationService) {}

  ngOnInit(): void {}
}
