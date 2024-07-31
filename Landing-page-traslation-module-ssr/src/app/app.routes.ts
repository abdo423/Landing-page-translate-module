import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FormComponentComponent } from './Components/form-component/form-component.component';
import { SubscribeSectionComponent } from './Components/subscribe-section/subscribe-section.component';

export const routes: Routes = [

    { path: 'first-component', component: HomeComponent },
    { path: 'second-component', component: FormComponentComponent },
   
    {path: 'subscribe', component: SubscribeSectionComponent},
  
  ];
