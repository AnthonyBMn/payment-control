import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PrimerSemComponent } from './pages/primer-sem/primer-sem.component';
import { SegundoSemComponent } from './pages/segundo-sem/segundo-sem.component';
import { TercerSemComponent } from './pages/tercer-sem/tercer-sem.component';
import { CuartoSemComponent } from './pages/cuarto-sem/cuarto-sem.component';
import { QuintoSemComponent } from './pages/quinto-sem/quinto-sem.component';
import { SextoSemComponent } from './pages/sexto-sem/sexto-sem.component';
import { SeptimoSemComponent } from './pages/septimo-sem/septimo-sem.component';
import { OctavoSemComponent } from './pages/octavo-sem/octavo-sem.component';
import { NovenoSemComponent } from './pages/noveno-sem/noveno-sem.component';
import { DecimoSemComponent } from './pages/decimo-sem/decimo-sem.component';
import { OnceavoSemComponent } from './pages/onceavo-sem/onceavo-sem.component';

const app_routes: Routes = [
  { path: '', component: PrimerSemComponent },
  { path: 'segundo-sem', component: SegundoSemComponent },
  { path: 'tercer-sem', component: TercerSemComponent },
  { path: 'cuarto-sem', component: CuartoSemComponent },
  { path: 'quinto-sem', component: QuintoSemComponent },
  { path: 'sexto-sem', component: SextoSemComponent },
  { path: 'septimo-sem', component: SeptimoSemComponent },
  { path: 'octavo-sem', component: OctavoSemComponent },
  { path: 'noveno-sem', component: NovenoSemComponent },
  { path: 'decimo-sem', component: DecimoSemComponent },
  { path: 'onceavo-sem', component: OnceavoSemComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
