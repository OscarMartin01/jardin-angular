import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { Form } from "../models/form";
import { global } from "./global";


@Injectable()
export class ProjectService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url= global.url;
    }

    testService(){
        return 'Probando Angular';
    }
}