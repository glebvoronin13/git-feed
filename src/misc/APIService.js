import axios from 'axios';
import Rx from 'rxjs/Rx';
import cache from 'memory-cache';
import { API_URL } from '../constants/API';

export class API {
    static get = (path) => {
        const req = Rx.Observable.create((observer) => {
            axios.get(API_URL + path)
                .then((response) => {
                    cache.put(path, response.data);
                    observer.next(response.data);
                    observer.complete();
                })
                .catch((err) => {
                    observer.error(err.response);
                    observer.complete();
                })
        });
        return req;
    }
}