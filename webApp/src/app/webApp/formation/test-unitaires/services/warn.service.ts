import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WarnService {

    constructor() { }

    // Méthodes
    public warnMessage = (msg: string) => {
        console.warn(`Le message est : ${msg}`);

    }
}
