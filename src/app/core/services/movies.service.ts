import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movies';
import {BehaviorSubject, throwError} from 'rxjs'
import {tap, catchError} from "rxjs/operators"

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  private movieSubject= new BehaviorSubject({
    data:[],
    loading: false,
    error: '',
  });
  movie = this.movieSubject.asObservable();

  constructor(private http: HttpClient) {}

 

  getMovieList(): Observable<Movie[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';

    const state = this.movieSubject.value;
    this.movieSubject.next({...state, loading:true, error:''});

    return this.http.get<Movie[]>(url).pipe(
      tap((result)=>{
        this.movieSubject.next({ ...state, data:result , loading: false, error:''});
        }),
        catchError((err) => {
          this.movieSubject.next({...state, loading: false , error: err.error});
          return throwError(err);
        })
    );
  }

  getMovieDetail(id: number): Observable<any> {
    // const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?maPhim=${id}`;

    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim`;

    let params = new HttpParams();
    params = params.append('maPhim', id.toString());

    return this.http.get<any>(url, { params });
  }


  getMovieListPaging(currentPage: number, pageSize: number) {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang';

    let params = new HttpParams();
    params = params
      .append('soTrang', currentPage.toString())
      .append('soPhanTuTrenTrang', pageSize.toString());

    return this.http.get(url, { params });
  }

  addMovie(values: any): Observable<any>{
    const url=
    'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh';

    const formData= new FormData();
    for(let key in values){
      formData.append(key, values[key])

    }
    formData.append('maNhom', 'GP01');

    return this.http.post(url , formData)

  }
}
