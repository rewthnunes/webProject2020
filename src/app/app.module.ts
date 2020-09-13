import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule }   from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    HomeComponent,
    PageNotFoundComponent,
    RodapeComponent,
    ContatoComponent,
    SobreComponent,
    MapComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    InputTextareaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
