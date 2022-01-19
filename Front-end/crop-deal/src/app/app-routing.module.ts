import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateCropComponent } from './components/farmer/create-crop/create-crop.component';
import { CropListComponent } from './components/farmer/crop-list/crop-list.component';
import { UpdateCropComponent } from './components/farmer/update-crop/update-crop.component';
import { CropDetailsComponent } from './components/farmer/crop-details/crop-details.component';
import { AuthGuard } from './services/auth.guard';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdmincropListComponent } from './components/admin/admincrop-list/admincrop-list.component';
import { CropSellComponent } from './components/crop/crop-sell/crop-sell.component';
import { AdminCardGuard } from './services/admin-card.guard';
import { AdoutUsComponent } from './components/adout-us/adout-us.component';
import { ThankComponent } from './components/thank/thank.component';
import { PayComponent } from './components/pay/pay.component';

const routes: Routes = [
 {path:'', component:HomeComponent},
 {path:'login', component:LoginComponent},
 {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
 {path:'findcrop', component:CropListComponent, canActivate:[AuthGuard]},
 {path:'addcrop', component:CreateCropComponent},
 {path:'update-crop/:id', component:UpdateCropComponent},
 {path:'crop-details/:id', component:CropDetailsComponent},
 {path:'admin-login', component:AdminLoginComponent},
 {path:'register', component:RegistrationComponent},
 {path:'admin-crop', component:AdmincropListComponent, canActivate:[AdminCardGuard]},
 {path:'avail-crop', component:CropSellComponent},
 {path:'about-us', component:AdoutUsComponent},
 {path:'thank', component:ThankComponent},
 {path:'pay', component:PayComponent}
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
