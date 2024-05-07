import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canGoSplashGuard } from './features/splashScreen/guards/can-go-splash.guard';
import { SplashScreenComponent } from './features/splashScreen/components/splash-screen/splash-screen.component';
import { canGoAuthGuard } from './features/auth/guards/can-go-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/pages/auth.module').then( m => m.AuthPageModule),
    canActivate: [canGoAuthGuard]
  },
  {
    path: 'splashScreen',
    component: SplashScreenComponent,
    canActivate: [canGoSplashGuard]
  },
  {
    path: '',
    redirectTo: 'splashScreen',
    pathMatch: 'full'
  },
  {
    path: 'navigation-tabs',
    loadChildren: () => import('./features/navigation-tabs/navigation-tabs.module').then( m => m.NavigationTabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
