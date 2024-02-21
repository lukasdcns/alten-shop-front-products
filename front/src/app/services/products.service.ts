import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {Product} from '../../models/product';


@Injectable()
export class ProductsService {

  constructor(private http: HttpClient, private router: Router) {
  }

  private productsUrl = 'api/products';

  private log(log: string) {
    // tslint:disable-next-line:no-console
    console.info(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap(_ => this.log(`fetched products`)),
      catchError(this.handleError(`getProducts`, []))
    );
  }


  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;

    return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`fetched product id= ${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  updateProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.put<Product>(this.productsUrl, product, httpOptions).pipe(
      tap(_ => this.log(`updated products id=${product.id}`)),
      catchError(this.handleError<any>(`updateProduct`))
    );
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
      tap(_ => this.log('product added')),
      catchError(this.handleError<any>(`addProduct`))
    );
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.productsUrl}/${id}`);
  }

  goBack(link: any): void {
    this.router.navigate(link);
  }

  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Product[]>(`${this.productsUrl}/?rarity=${term}`).pipe(
      tap(_ => this.log(`found products matching "${term}`)),
      catchError(this.handleError<Product[]>('searchProducts', []))
    );
  }
}
