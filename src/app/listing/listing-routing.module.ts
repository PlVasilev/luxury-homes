import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../auth.guard';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: 'listing',
        canActivate: [AuthGuard],
        data: {
            isLogged: true
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/listing/all'
            },
            {
                path: 'all',
                component: AllComponent
            },
            {
                path: 'add',
                component: AddComponent
            },
            {
                path: 'edit',
                component: EditComponent
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'details/:id',
                component: DetailsComponent
            }
        ]
    }
];

export const ListingRoutingModule = RouterModule.forChild(routes);