import { Category } from './category';

export class Brand {
  id: string;
  name: string;
  company: string;
  companyId: string;
  parentCompany: string;
  hqCountry: any;
  website: string;
  imageUrl: string;
  displayInSearch: string;
  productCategory: Category;
  ratings: 5
}
