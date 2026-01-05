import { Routes } from '@angular/router';
import { Types } from './types/types';
import { Config } from './config/config';

export const routes: Routes = [
    {path: 'types', component: Types},
    {path: 'config', component: Config},
];
