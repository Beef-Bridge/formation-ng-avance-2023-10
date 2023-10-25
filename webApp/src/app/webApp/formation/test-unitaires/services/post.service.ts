import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
    id: number;
    title: string | undefined;
    body: string ;
}
@Injectable({ providedIn: 'root'})

export class PostService {
    constructor(private http: HttpClient) { }

    // Méthodes
    getAvis() {
        return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
    }
}
