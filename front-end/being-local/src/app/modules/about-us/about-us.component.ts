import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../core/navigation/navigation.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  constructor(public navigation: NavigationService) {}

  teamMembers = [
    {
      name: 'Bindu Madhavi',
      title: 'Product Manager',
      linkedin: 'https://www.linkedin.com/in/bindu-madhavi-m-0361372/',
      github: 'https://github.com/bindu-musti',
      twitter: '',
      urls: [
        {
          linkedin: 'https://www.linkedin.com/in/bindu-madhavi-m-0361372/',
          github: 'https://github.com/bindu-musti',
          twitter: ''
        }
      ]
    },
    {
      name: 'Binesh',
      title: 'Developer',
      linkedin: 'https://www.linkedin.com/in/binesh-k-08a99515/',
      github: 'https://github.com/BineshNarayanan',
      twitter: '',
      urls: [
        {
          linkedin: 'https://www.linkedin.com/in/binesh-k-08a99515/',
          github: 'https://github.com/BineshNarayanan',
          twitter: ''
        }
      ]
    },
    {
      name: 'Ahad',
      title: 'Developer',
      linkedin: 'https://www.linkedin.com/in/ahad-ansari-00390a143/',
      github: 'https://github.com/AhadAns',
      twitter: '',
      urls: [
        {
          linkedin: 'https://www.linkedin.com/in/ahad-ansari-00390a143/',
          github: 'https://github.com/AhadAns',
          twitter: ''
        }
      ]
    }
  ];
  ngOnInit(): void {}
}
