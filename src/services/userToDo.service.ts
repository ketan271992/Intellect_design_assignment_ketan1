import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { RequestOptions,URLSearchParams  } from '@angular/http';

@Injectable()
export class userToDoService {
    constructor(private http:Http) {
    }

    getData():Observable<Post[]> {
        return this.http.get('https://jsonplaceholder.typicode.com/users/')
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res:Response) {
    let body = res.json();
    return body || [];
	}

	private handleError (error){
		return error;
	}

	getTodo(userId):Observable {

    return this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + userId)
        .map( this.extractData)
        .catch(this.handleError);
    }

    private handleError(error: any) {
    console.log('Yup an error occurred', error);
    return Observable.throw(error.message || error);
}

}