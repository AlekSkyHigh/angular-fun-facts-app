import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent
  ]
})
export class CoreModule { }
