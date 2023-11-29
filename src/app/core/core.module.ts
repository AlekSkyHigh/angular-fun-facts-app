import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
  ],
  imports: [
    NavigationComponent,
    CommonModule,
    HomeComponent
  ],
  exports: [
    NavigationComponent,
    HomeComponent,
  ]
})
export class CoreModule { }
