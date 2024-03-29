export interface categoryType {
  id: number;
  name: string;
}

export interface topCategoryType extends categoryType {
  subCategories: categoryType[];
  height: number;
  imgUrl: string;
}

export interface themeType {
  id: number;
  name: string;
  imgUrl: string;
  url: string;
}
