import { Routes } from '@angular/router';
import { PacienteListar } from './paciente-listar/paciente-listar';
import { CitaListar } from './cita-listar/cita-listar';
import { MedicoListar } from './medico-listar/medico-listar';

export const routes: Routes = [
    /*
    ----------------------------------------PACIENTES----------------------------------------
    */
    { path: 'paciente-listar', component: PacienteListar, title: 'Pacientes' },

    /*
    -----------------------------------------MEDICOS-----------------------------------------
    */
    { path: 'medico-listar', component: MedicoListar, title: 'Medicos' },
    /*
    ------------------------------------------CITAS------------------------------------------
    */
    { path: 'cita-listar', component: CitaListar, title: 'Citas' },
    { path: '', redirectTo: 'paciente-listar', pathMatch: 'full' }
];
