import { Routes } from '@angular/router';
import { PacienteListar } from './paciente-listar/paciente-listar';

export const routes: Routes = [
    /*
    ----------------------------------------PACIENTES----------------------------------------
    */
    { path: 'paciente-listar', component: PacienteListar, title: 'Pacientes' },

    /*
    -----------------------------------------MEDICOS-----------------------------------------
    */
    { path: 'medico-listar', component: PacienteListar, title: 'Pacientes' },
    /*
    ------------------------------------------CITAS------------------------------------------
    */
    { path: 'cita-listar', component: PacienteListar, title: 'Pacientes' },
    { path: '', redirectTo: 'paciente-listar', pathMatch: 'full' }
];
