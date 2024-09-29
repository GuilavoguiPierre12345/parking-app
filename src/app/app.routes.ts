import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/dashboard/statistics/statistics.component';
import { PlacesComponent } from './components/dashboard/places/places.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { CustomersComponent } from './components/dashboard/customers/customers.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent,
        title: "PARKING | LOGIN"
    },
    
    {
        path:"dasboard",
        component:DashboardComponent,
        children: [
            {
                path:'',
                component: StatisticsComponent,
                title:"PARKING | DASHBOARD"

            },
            {
                path:'places',
                component: PlacesComponent,
                title:"PARKING | PLACES"

            },
            {
                path:'places',
                component: PlacesComponent,
                title:"PARKING | DASHBOARD"

            },
            {
                path:'users',
                component: UsersComponent,
                title:"PARKING | DASHBOARD"

            },
            
        ]

    }
];
