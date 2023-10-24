import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private http: HttpClient) { }
    getActivities() {
      this.http.get("http://localhost:3000/api/activities").subscribe((data) => {
        console.log(data);
      });
    }
}
