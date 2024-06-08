import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';
import { Mascota } from './models/mascota.component';
import { FormGroup } from '@angular/forms';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListComponent } from './pages/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dataSource = new BehaviorSubject<Mascota[]>(new Array<Mascota>);
  data = this.dataSource.asObservable();

  addMascota(form: FormGroup) {
    const { id, nombre, raza } = form.value;

    this.dataSource.pipe(take(1)).subscribe((mascotas: Mascota[]) => {
      this.dataSource.next([...mascotas, { id, nombre, raza }]);
    });
  }
}
