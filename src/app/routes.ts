import { Routes } from '@angular/router';
import { NotFoundComponent } from './commons/components/notfound/notfound.component';


export const routes: Routes = [
    { path: 'notfound', component: NotFoundComponent },
    { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];
