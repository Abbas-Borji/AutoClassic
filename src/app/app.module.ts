import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactComponent } from './contact/contact.component';
import { SloganComponent } from './slogan/slogan.component';
import { ServicesComponent } from './services/services.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { AddressComponent } from './address/address.component';
import { FormComponent } from './form/form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CounterComponent,
    HomeComponent,
    BrandsComponent,
    TestimonialsComponent,
    AboutComponent,
    FooterComponent,
    OurServicesComponent,
    ContactComponent,
    SloganComponent,
    ServicesComponent,
    FormSectionComponent,
    AddressComponent,
    FormComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
