import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { BodyAnimationComponent } from './body-animation/body-animation.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { VidComponent } from './vid/vid.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyAnimationComponent,
    SidenavComponent,
    AboutusComponent,
    HomeComponent,
    ContactusComponent,
    
    VidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
