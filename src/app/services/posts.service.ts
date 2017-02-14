import {Injectable}from '@angular/core'; //Allows us to inject as a dependency
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  constructor(private http: Http){
    console.log('PostsService initialised.');
  }
}
