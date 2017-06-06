import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Category } from '../models';


@Injectable()
export class ProductService {

    constructor(private http: Http) {

    }

    public getCategories(): Observable<Response> {
        console.log("gettig categories");
        return this.http.get('/api/categories/');
    }


    public createCategory(category: Category): Observable<Response> {
        const headers: Headers = this.getAuthenticationHeader();
        return this.http.post('/api/categories/', { category: category }, { headers: headers });
    }

    public deleteCategory(category: Category): Observable<Response> {
        const headers: Headers = this.getAuthenticationHeader();
        const requestOptions = new RequestOptions({
            // url: '/api/caegories/',
            body: { category: category },
            headers: headers,
        });
        return this.http.delete('/api/categories/', requestOptions);
    }

    public getAllProducts(): Observable<Response> {
        let token = localStorage.getItem('token');
        let headers = new Headers();
        headers.append("Authorization", token);
        //console.log(token);

        return this.http.get('/api/products', { headers: headers });
    }

    public getProductsByCategory(category: string): Observable<Response> {
        let token = localStorage.getItem('token');
        let headers = new Headers();
        headers.append("Authorization", token)
        return this.http.get('/api/products/' + category, { headers: headers });
    }

    public getProductByID(id: string): Observable<Response> {
        let token = localStorage.getItem('token');
        let headers = new Headers();
        headers.append('Authorization', token);
        return this.http.get('/api/product/' + id, { headers: headers });
    }

    private getAuthenticationHeader(): Headers {
        let token = localStorage.getItem('token');
        let headers = new Headers();
        headers.append("Authorization", token);
        return headers;
    }
}