import { Routes } from '@angular/router';
import { PacienteListar } from './paciente-listar/paciente-listar';
import { CitaListar } from './cita-listar/cita-listar';
import { MedicoListar } from './medico-listar/medico-listar';
import { PacienteCrear } from './paciente-crear/paciente-crear';
import { CitaCrear } from './cita-crear/cita-crear';
import { PacienteActualizar } from './paciente-actualizar/paciente-actualizar';

export const routes: Routes = [
    /*
    ----------------------------------------PACIENTES----------------------------------------
    */
    { path: 'paciente-listar', component: PacienteListar, title: 'Pacientes' },
    { path: 'paciente-crear', component: PacienteCrear, title: 'Pacientes' },
    { path: 'paciente-actualizar/:id', component: PacienteActualizar, title: 'Pacientes' },

    /*
    -----------------------------------------MEDICOS-----------------------------------------
    */
    { path: 'medico-listar', component: MedicoListar, title: 'Medicos' },
    /*
    ------------------------------------------CITAS------------------------------------------
    */
    { path: 'cita-listar', component: CitaListar, title: 'Citas' },
    { path: 'cita-crear/:idPaciente', component: CitaCrear, title: 'Citas' },

    { path: '', redirectTo: 'paciente-listar', pathMatch: 'full' }
];
