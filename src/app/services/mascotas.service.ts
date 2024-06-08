import { Injectable } from "@angular/core";
import { BehaviorSubject, take } from "rxjs";
import { Mascota } from "../models/mascota.component";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class MascotasService {
    data = new BehaviorSubject<Mascota[]>(new Array<Mascota>);
    currentData = this.data.asObservable();

    addMascota(form: FormGroup) {
        const { id, nombre, raza } = form.value;

        this.data.pipe(take(1)).subscribe((mascotas: Mascota[]) => {
            this.data.next([...mascotas, { id, nombre, raza }]);
        });
    }

    removeMascota(id: number) {
        this.data.pipe(take(1)).subscribe((mascotas: Mascota[]) => {
            const data = mascotas;
            const index = data.findIndex(item => item.id === id);
            data.splice(index);
            
            this.data.next(data);
        });
    }
}