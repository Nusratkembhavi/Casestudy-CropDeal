import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

import { DashboardComponent } from './components/dashboard/dashboard.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

import { CreateCropComponent } from './components/farmer/create-crop/create-crop.component';
import { CropListComponent } from './components/farmer/crop-list/crop-list.component';
import { UpdateCropComponent } from './components/farmer/update-crop/update-crop.component';
import { CropDetailsComponent } from './components/farmer/crop-details/crop-details.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdmincropListComponent } from './components/admin/admincrop-list/admincrop-list.component';
import { CropSellComponent } from './components/crop/crop-sell/crop-sell.component';
import { AdoutUsComponent } from './components/adout-us/adout-us.component';
import { ThankComponent } from './components/thank/thank.component';
import { PayComponent } from './components/pay/pay.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    CropListComponent,
    CreateCropComponent,
    UpdateCropComponent,
    CropDetailsComponent,
    AdminLoginComponent,
    RegistrationComponent,
    AdmincropListComponent,
    CropSellComponent,
    AdoutUsComponent,
    ThankComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    ReactiveFormsModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
