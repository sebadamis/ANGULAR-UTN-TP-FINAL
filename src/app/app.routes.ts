import { Routes } from '@angular/router';

import { Home } from './home/home.component';
import { Login } from './login/login.component';
import { Register } from './register/register.component';
import { Contact } from './contact/contact.component';
import { Products } from './products/products.component';
import { Detail } from './detail/detail.component';


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
        path: "products/:product_id",
        component: Detail
    },
    {   
        path: '**',
        component: Home
    }
];
