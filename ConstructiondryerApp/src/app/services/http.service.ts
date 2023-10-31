import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ConstructionDryer } from "../models/ConstructionDryer";
import { Injectable } from "@angular/core";
import { IHttpService } from "./interfaces/iHttpService";

@Injectable()
export class HttpService implements IHttpService {

    constructor(private http: HttpClient)
    {}

    getDryerInformation(code:any): Observable<ConstructionDryer>{
        console.log(code);
        return this.http.get<ConstructionDryer>('../../assets/jsonfiles/dummydryer');
    }
}