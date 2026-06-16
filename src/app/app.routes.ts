import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { Settings } from './components/settings/settings';
import { Directive } from '@angular/core';
import { Directives } from './components/directives/directives';
import { AttrDirective } from './components/attr-directive/attr-directive';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    
    {
        path: 'home',
        component: Home
    },
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'settings',
        component: Settings
    },
    {
        path: 'directives',
        component: Directives
    },
    {
        path: 'attr-directive',
        component: AttrDirective
    }
];
