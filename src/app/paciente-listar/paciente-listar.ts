import { Component } from '@angular/core';
import { Paciente } from '../Models/Paciente';
import { PacienteService } from '../Services/PacienteService.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'paciente-listar',
  imports: [CommonModule],
  templateUrl: './paciente-listar.html',
  styleUrl: './paciente-listar.css',
})
export class PacienteListar {
  pacientes: Paciente[];
  currentPage = 0;
  totalPages = 0;
  constructor(private pacienteService: PacienteService, private route: Router) { }

  ngOnInit() {
    this.listadoPacientes();
  }

  public listadoPacientes() {
    this.pacienteService.getPacientesPage(this.currentPage, 10).subscribe(data => {
      this.pacientes = data.content;
      this.totalPages = data.totalPages;
    });
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.listadoPacientes();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.listadoPacientes();
    }
  }
}
