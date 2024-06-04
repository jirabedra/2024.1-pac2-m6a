import { Routes } from '@angular/router';
import { CatfactSearchComponent } from './components/catfact-search/catfact-search.component';
import { HomeComponent } from './components/home/home.component';
import { DeadendComponent } from './components/deadend/deadend.component';

export const routes: Routes = [  
    {path: 'catfacts', component: CatfactSearchComponent},
    {path: '', component: HomeComponent},
    {path: 'deadend', component: DeadendComponent}];
