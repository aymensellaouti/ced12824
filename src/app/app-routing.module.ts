import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { APP_ROUTES } from './config/app-routes.config';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from './products/products.component';
// import { RhComponent } from './optimizationPattern/rh/rh.component';
import { CustomPreloadingStrategy } from './preloading strategies/custom.preloading-strategy';
import { RhComponent } from './optimizationPattern/rh/rh.component';


// /cv

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'color', component: ColorComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module')
  },
  {
    path: APP_ROUTES.cv,
    loadChildren: () => import('./cv/cv.module'),
    data: {
      preload: true
    }
  },
  { path: 'rh', component: RhComponent },
  { path: APP_ROUTES.login, component: LoginComponent },
  { path: 'client/dossier/:element/:id', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy, // mastratégie custom
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
