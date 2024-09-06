import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    SelectButtonModule,
    AppRoutingModule,
    InputTextModule,
    FloatLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
