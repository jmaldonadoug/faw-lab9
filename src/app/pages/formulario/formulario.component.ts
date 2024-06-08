import { Component } from '@angular/core';
import { MascotasService } from '../../services/mascotas.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  constructor(private service: MascotasService) { }

  cont = 1;
  form = new FormGroup({
    id: new FormControl(1),
    nombre: new FormControl(''),
    raza: new FormControl('Perro'),
  });

  addMascota() {
    this.service.addMascota(this.form);
    this.cont = this.cont + 1;
    this.form.reset({ id: this.cont, raza: 'Perro' });
  }
}
