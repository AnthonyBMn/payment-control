import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
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
import { SwitchComponent } from './shared/switch/switch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { OnceavoSemComponent } from './pages/onceavo-sem/onceavo-sem.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimerSemComponent,
    SegundoSemComponent,
    TercerSemComponent,
    CuartoSemComponent,
    QuintoSemComponent,
    SextoSemComponent,
    SeptimoSemComponent,
    OctavoSemComponent,
    NovenoSemComponent,
    DecimoSemComponent,
    SwitchComponent,
    SideNavComponent,
    OnceavoSemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
