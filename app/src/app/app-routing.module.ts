import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { MasterLayoutComponent } from './components/master-layout/master-layout.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/cadastro',
    component: RegisterComponent,
  },
  {
    path: 'auth/recuperar_senha',
    component: ForgotPasswordComponent
  },
  {
    path: 'doctor',
    component: MasterLayoutComponent,
    loadChildren: () => import('./pages/doctor/doctor.module').then(m => m.DoctorModule),
    data: {
      breadcrumb: "Médicos"
    }
  },
  {
    path: 'pacient',
    component: MasterLayoutComponent,
    loadChildren: () => import('./pages/pacient/pacient.module').then(m => m.PacientModule),
    data: {
      breadcrumb: "Pacientes"
    }
  },
  {
    path: 'medical-clinic',
    component: MasterLayoutComponent,
    loadChildren: () => import('./pages/medical-clinic/medical-clinic.module').then(m => m.MedicalClinicModule),
    data: {
      breadcrumb: "Clinicas"
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
