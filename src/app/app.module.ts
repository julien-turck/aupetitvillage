import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsListeComponent } from './produits-liste/produits-liste.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SingleProduitsComponent } from './single-produits/single-produits.component';
import { SortByPricePipe } from './sort-by-price.pipe';
import { SortByPriceDecPipe } from './sort-by-price-dec.pipe';
import { NgArrayPipesModule } from 'ngx-pipes';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    ProduitsListeComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SingleProduitsComponent,
    SortByPricePipe,
    SortByPriceDecPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgArrayPipesModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
