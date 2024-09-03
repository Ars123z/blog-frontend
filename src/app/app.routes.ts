import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'register', loadComponent: ()=> import('./authComponents/register/register.component').then((a)=> a.RegisterComponent)},
    {path: 'verify-email', loadComponent: ()=> import('./authComponents/verify-email/verify-email.component').then((a)=> a.VerifyEmailComponent)},
    {path: 'login', loadComponent: ()=> import('./authComponents/login/login.component').then((a)=> a.LoginComponent)},
    {path: 'password-reset', loadComponent: ()=> import('./authComponents/password-reset/password-reset.component').then((a)=> a.PasswordResetComponent)},
    {path: 'password-reset-confirm/:uid/:token', loadComponent: ()=> import('./authComponents/password-reset-confirm/password-reset-confirm.component').then((a)=> a.PasswordResetConfirmComponent)},


    {path: '', loadComponent: () => import('./home/home.component').then((a)=> a.HomeComponent)},
    {path: 'blogs', loadComponent: () => import('./blog/blog-list/blog-list.component').then((a)=> a.BlogListComponent)},
    {path: 'blog-detail', loadComponent: () => import('./blog/blog-detail/blog-detail.component').then((a)=> a.BlogDetailComponent)},
    {path: 'works', loadComponent: () => import('./work/work-list/work-list.component').then((a)=> a.WorkListComponent)},
    {path: 'work-detail', loadComponent: () => import('./work/work-detail/work-detail.component').then((a)=> a.WorkDetailComponent)},
    {path: 'about-me', loadComponent: ()=> import('./about-me/about-me.component').then(a=> a.AboutMeComponent)}
];
