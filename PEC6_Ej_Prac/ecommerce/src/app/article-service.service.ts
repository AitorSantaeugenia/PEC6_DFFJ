import { Injectable } from '@angular/core';
import {Article} from "./article-item/model/article";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArticleServiceService {

  private articles: Article[];

  constructor() { 
    this.articles = [
    {
      id:1,
      name: "Modelo De Máquina De Escribir Retro",
      imageUrl: "./../../assets/images/article-1.png",
      price: 87.59,
      isOnSale: true,
      quantityInCart:0,
      inStock:10,
    },
    {
      id:2,
      name: "Cámara réflex Canon EOS 2000D",
      imageUrl: "./../../assets/images/article-2.png",
      price: 429,
      isOnSale: false,
      quantityInCart:0,
      inStock:0,
    },
    {
      id:3,
      name: "Monitor FHD de 21,5 pulgadas, ThinkVision",
      imageUrl: "./../../assets/images/article-3.png",
      price: 119,
      isOnSale: true,
      quantityInCart:0,
      inStock:5,
    }
  ];
}

  getArticles() : Observable<Article[]> {
    return of(this.articles);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable <Article | null | undefined> {
    const article = this.articles.find(article => article.id === articleID);

    if (article) {
      article.quantityInCart += changeInQuantity;
      return of(article);
    } else {
      return of(null);
    }
  }

    createArticle(article: Article): Observable<any> {
    let articleClone = Object.assign({}, article);
    articleClone.id = this.articles.length + 1;
    articleClone.quantityInCart = 0;
    this.articles.push(articleClone);
    return of(articleClone);
  }
}
