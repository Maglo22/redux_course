import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from '../app.reducer';
import * as actions from '../ingreso-egreso/ingreso-egreso.actions';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  userSubs: Subscription;
  ingresosEgresosSub: Subscription;

  constructor(
    private store: Store<AppState>,
    private ingresoEgresoService: IngresoEgresoService
  ) { }

  ngOnInit(): void {
    this.userSubs = this.store.select('user')
    .pipe(
      filter(auth => auth.user != null)
    )
    .subscribe(({ user }) => {
      this.ingresosEgresosSub = this.ingresoEgresoService.initIngresosEgresosListener(user.uid)
      .subscribe(ingresosEgresos => {
        this.store.dispatch(actions.setItems({ items: ingresosEgresos }))
      });
    });
  }

  ngOnDestroy() {
    this.ingresosEgresosSub?.unsubscribe();
    this.userSubs?.unsubscribe();
  }

}
