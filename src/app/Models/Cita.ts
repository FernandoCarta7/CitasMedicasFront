import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Cita {
  id_cita: number;
  fechaCita: Date;
  idPaciente: number;
  paciente?: Paciente;
  idMedico: number;
  medico?: Medico;
}