import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Paciente } from "../Models/Paciente";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class PacienteService {
    private HOST = "http://192.168.1.3:8080"; //CAMBIAR DIRECCION IP
    private url = this.HOST + "/app/paciente";
    private urlActualizar = this.HOST + "/app/editarPaciente";
    private urlDelete = this.HOST + "/app/deletePaciente";
    private urlAdd = this.HOST + "/app/savePaciente";
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

    getPacientesPage(page: number, size: number): Observable<any> {
        let params = new HttpParams()
            .set('page', page)
            .set('size', size);
        return this.http.get<any>(this.url, { params });
    }

    getPacienteById(idPaciente: number): Observable<Paciente> {
        return this.http.get<Paciente>(`${this.url}/${idPaciente}`);
    }

    addPaciente(paciente: Paciente): Observable<Object> {
        return this.http.post(this.urlAdd, paciente);
    }
    editPaciente(id: number, paciente: Paciente): Observable<Object> {
        return this.http.put(`${this.urlActualizar}/${id}`, paciente);
    }
    deletePaciente(idPaciente: number): Observable<Object> {
        return this.http.delete(`${this.urlDelete}/${idPaciente}`);
    }


}