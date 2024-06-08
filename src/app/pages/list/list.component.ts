import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../../services/mascotas.service';
import { Mascota } from '../../models/mascota.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  constructor(private service: MascotasService) {}

  currentData: Mascota[] = [];

  ngOnInit(): void {
    this.service.currentData.subscribe(data => this.currentData = data);
  }

  removeMascota (id: number) {
    this.service.removeMascota(id);
  }
}
