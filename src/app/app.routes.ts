import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'company/about-us',
        loadComponent: () =>
            import('./features/about-us-page/about-us-page.component').then(m => m.AboutUsPageComponent)
    },
    {
        path: 'company/vision-missions',
        loadComponent: () =>
            import('./features/vison-mission-page/vison-mission-page.component').then(m => m.VisonMissionPageComponent)
    },
    {
        path: 'company/organizational-structure',
        loadComponent: () =>
            import('./features/organizational-structure/organizational-structure.component').then(m => m.OrganizationalStructureComponent)
    },
    {
        path: 'company/founding-partner',
        loadComponent: () =>
            import('./features/founding-partner-page/founding-partner-page.component').then(m => m.FoundingPartnerPageComponent)
    },
    {
        path: 'information/news',
        loadComponent: () =>
            import('./features/news/news.component').then(m => m.NewsComponent)
    },
    {
        path: 'information/news/:id',
        loadComponent: () =>
            import('./features/news-detail/news-detail.component').then(m => m.NewsDetailComponent)
    }


    // Tambahkan rute lain sesuai kebutuhan
];