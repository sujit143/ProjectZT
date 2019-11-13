import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { Observable } from 'rxjs';
import { AppConstant } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class LocationsdataService {

    api_url: string;
    appendpoint: string;
    cpDefaultUrl: string;
    cpDefaultUpdateUrl: string;
    SERVER_URL_ADD: string;
    SERVER_URL: string;
    SERVER_URL_DESG_DEL: string;




    constructor(private http: HttpClient,private CommonHttpService:CommonHttpService) {
        this.api_url = AppConstant.API_ENDPOINT1;
        this.appendpoint = this.api_url;
        this.SERVER_URL= this.appendpoint+ AppConstant.API_CONFIG.API_URL.SETTINGS.GETLOCATIONS;
        this.SERVER_URL_ADD= this.appendpoint+ AppConstant.API_CONFIG.API_URL.SETTINGS.INSERTLOCATIONS;
        this.SERVER_URL_DESG_DEL= this.appendpoint+ AppConstant.API_CONFIG.API_URL.SETTINGS.DELETELOCATIONS;

     }

    // private mobUrl = 'api/desig';



    public getLocations() :Observable<any>{
        return this.http.get(this.SERVER_URL);
        }


        public addLocations(f) {
            console.log(f);
            console.log(JSON.stringify(f));
            let body = JSON.stringify(f);
            // let head = new HttpHeaders().set("Content-Type", "application/json");
            //added interceptors
            return this.http.post(this.SERVER_URL_ADD, body);

            }


          public editLocations(item:any):Promise<any> {
                console.log(item);

                return this.CommonHttpService.globalPostService(this.SERVER_URL_ADD,item).then(data=> {
                    console.log(item);
                    // return data;
                });
                }




            public deleteLocations(LocationId) {
                let head = new HttpHeaders().set("Content-Type", "application/json");
                console.log('how it is getting ID?:' + LocationId);
                return this.http.post(this.SERVER_URL_DESG_DEL+LocationId, { headers: head });
                }

}
