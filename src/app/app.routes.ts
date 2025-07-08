import { Routes } from '@angular/router';

import { Home } from './home/home.component';
import { Login } from './login/login.component';
import { Register } from './register/register.component';
import { Contact } from './contact/contact.component';
import { Products } from './products/products.component';


export const routes: Routes = [
    {   
        path: 'home',
        component: Home
    },
    {   
        path: 'login',
        component: Login
    },
    {   
        path: 'registro',
        component: Register
    },
    {   
        path: 'contacto',
        component: Contact
    },
    {   
        path: '**',
        component: Home
    }
];
