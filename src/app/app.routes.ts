import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { Settings } from './components/settings/settings';

export const routes: Routes = [
    
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
    }
];
