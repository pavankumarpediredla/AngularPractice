import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { Settings } from './components/settings/settings';
import { Directive } from '@angular/core';
import { Directives } from './components/directives/directives';
import { AttrDirective } from './components/attr-directive/attr-directive';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Signal } from './components/signal/signal';

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
    },
    {
        path: 'signal',
        component: Signal,
        title: 'signal'
    }
    ,{
        path: '**',
        component:PageNotFound,
        title: 'page Not Found'
    }
];
