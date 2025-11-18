import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Medico } from "../Models/Medico";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class MedicoService {
    private HOST = "http://192.168.1.3:8080";
    private url = this.HOST + "/app/medicos";
    private urlPageable = this.HOST + "/app/medico";
    private urlGetById = this.HOST + "/app/getMedicoById";
    private urlDelete = this.HOST + "/app/deleteMedico";
    private urlAdd = this.HOST + "/app/saveMedico";
    //private apiUrl = "";

    constructor(private http: HttpClient) {

    }
    /*getMedico(id: String) {
        return this.http.get<Medico>(`${this.url}/${id}`)
    }*/
    getMedicos(): Observable<Medico[]> {
        let lista = this.http.get<Medico[]>(this.url);
        return lista;
    }
    addMedico(medico: Medico): Observable<Object> {
        return this.http.post(this.urlAdd, medico);
    }
    editMedico(id: number, medico: Medico): Observable<Object> {
        return this.http.put(`${this.url}/${id}`, medico);
    }
    deleteMedico(id: number): Observable<Object> {
        return this.http.delete(`${this.urlDelete}/${id}`);
    }

    getMedicosPage(page: number, size: number): Observable<any> {
        let params = new HttpParams()
            .set('page', page)
            .set('size', size);
        return this.http.get<any>(this.urlPageable, { params });
    }

    getMedicoById(id: number): Observable<Medico> {
        return this.http.get<Medico>(`${this.urlGetById}/${id}`);
    }
}