import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Paciente } from "../Models/Paciente";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class PacienteService {

    private url = "http://localhost:8080/app/paciente";
    //private apiUrl = "";

    constructor(private http: HttpClient) {

    }
    /*getPaciente(id: String) {
        return this.http.get<Paciente>(`${this.url}/${id}`)
    }*/
    getPacientes(): Observable<Paciente[]> {
        let lista = this.http.get<Paciente[]>(this.url);
        return lista;
    }
    addPaciente(paciente: Paciente): Observable<Object> {
        return this.http.post(this.url, paciente);
    }
    editPaciente(id: number, paciente: Paciente): Observable<Object> {
        return this.http.put(`${this.url}/${id}`, paciente);
    }
    deletePaciente(id: number): Observable<Object> {
        return this.http.delete(`${this.url}/${id}`);
    }

    getPacientesPage(page: number, size: number): Observable<any> {
        let params = new HttpParams()
            .set('page', page)
            .set('size', size);
        return this.http.get<any>(this.url, { params });
    }
}