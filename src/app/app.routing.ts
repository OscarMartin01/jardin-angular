import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes= [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'servicios', component: ServicesComponent},
    {path: 'preguntas', component: QuestionsComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);