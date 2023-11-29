import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    HomeComponent,
  ]
})
export class CoreModule { }
