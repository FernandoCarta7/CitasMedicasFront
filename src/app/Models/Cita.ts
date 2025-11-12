import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Cita {
  id_cita: number;
  fecha_cita: Date;
  id_paciente: number;
  paciente?: Paciente;
  id_medico: number;
  medico?: Medico;
}