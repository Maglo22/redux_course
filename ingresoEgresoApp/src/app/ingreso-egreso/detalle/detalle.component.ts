import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppStateWithIngreso } from '../ingreso-egreso.reducer';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.model';
import { IngresoEgresoService } from 'src/app/services/ingreso-egreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ]
})
export class DetalleComponent implements OnInit, OnDestroy {

  ingresosEgresosSub: Subscription;
  ingresosEgresos: IngresoEgreso[] = [];

  constructor(private store: Store<AppStateWithIngreso>, private ingresoEgresoService: IngresoEgresoService) { }

  ngOnInit(): void {
    this.ingresosEgresosSub = this.store.select('ingresosEgresos').subscribe( ({ items }) => this.ingresosEgresos = items);
  }

  ngOnDestroy() {
    this.ingresosEgresosSub.unsubscribe();
  }

  borrar(uid: string) {
    this.ingresoEgresoService.borrarIngresoEgreso(uid)
      .then(() => Swal.fire('Borrado', 'Item borrado', 'success'))
      .catch(err => Swal.fire('Error', err.message, 'error'));
  }

}
