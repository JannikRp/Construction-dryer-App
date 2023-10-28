import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class HttpService {

    constructor(private http: HttpClient)
    {}

    getDryerInformation(): Observable<any>{
        return this.http.get('../../assets/jsonfiles/dummydryer');
    }
}