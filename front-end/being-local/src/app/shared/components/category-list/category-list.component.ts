import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  constructor() {}

  categories: any;

  ngOnInit(): void {
    this.categories = [
      {
        id: '1',
        name: 'Gourmet & Specialty Foods',
        imageUrl:
          'https://www.itcportal.com/sustainability/sustainability-report-2012/images/org-12.jpg',
        icon: 'gourmet'
      },
      {
        id: '2',
        name: 'Electronics',
        imageUrl:
          'https://cdn.toptenreviews.com/rev/site/cms/category_headers/237-h_main-w.png',
        icon: 'gourmet'
      },
      {
        id: '3',
        name: 'Computers & Accessories',
        imageUrl:
          'https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol-EVN-72235-180204-18192.jpg',
        icon: 'computers_mobiles'
      },
      {
        id: '4',
        name: 'Appliances',
        imageUrl:
          'https://e2e.ti.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-09-70/appliances-1.jpg',
        icon: 'appliances'
      },
      {
        id: '4',
        name: 'Home & Kitchen',
        imageUrl:
          'https://gaadiwaadi.com/wp-content/uploads/2018/10/new-car-launch-november-2018-e1540755340753.jpg',
        icon: 'gourmet'
      },
      {
        id: '4',
        name: 'Automobiles',
        imageUrl: 'http://www.advanceindustrial.net/images/home-slide-8.jpg',
        icon: 'automobile'
      },
      {
        id: '4',
        name: 'Industrial & Scientific',
        imageUrl:
          'https://fustany.com/images/en/content/header_image_fustany-beauty-makeup-2015_best_seller_makeup-main_image.png',
        icon: 'industrial'
      },
      {
        id: '4',
        name: 'Beauty',
        imageUrl:
          'https://kidsbaron.com/wp-content/uploads/2016/08/Best-Baby-Feeding-Products-For-Your-Deserving-Newborn-Baby.jpg',
        icon: 'gourmet'
      },
      {
        id: '4',
        name: 'Baby',
        imageUrl:
          'https://fashionista.com/.image/t_share/MTM2Mjk1MjM3NTAzOTUyNDk5/gettyimages-450871616jpg.jpg',
        icon: 'gourmet'
      },
      {
        id: '4',
        name: 'Clothing & Accessories',
        imageUrl:
          'http://www.wellcultivated.co.uk/images/category/organic-health-beauty.jpg',
        icon: 'gourmet'
      },
      {
        id: '4',
        name: 'Health & Personal Care',
        imageUrl:
          'https://res.cloudinary.com/lmn/image/upload/e_sharpen:150,f_auto,fl_lossy,q_80/v1/gameskinnyc/m/o/b/mobile-games-67024.jpg',
        icon: 'gourmet'
      },
      {
        id: '4',
        name: 'Toys & Games',
        imageUrl: 'http://gonexcom.com/files/2015/07/DL_large_it-services.jpg',
        icon: 'gourmet'
      },
      {
        id: '4',
        name: 'Software',
        imageUrl:
          'https://www.midoriservices.com/wp-content/uploads/2017/07/Managed-IT-Services.jpg',
        icon: 'gourmet'
      },
      {
        id: '4',
        name: 'IT Services',
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/81Md8ilhyWL._SL1500_.jpg',
        icon: 'gourmet'
      }
    ];
  }
}
