import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../moments';
import { environment } from '../../environments/environment';
import { Response } from '../response';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private http: HttpClient, private router: Router) { }

  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl)

  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);

  }

  getDevotionals(id: number): Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Response<Moment>>(url).pipe()
  }

  deleteDevotional(id: number): Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`
    this.router.navigateByUrl('/')

    return this.http.delete<Response<Moment>>(url)
  }
}

