import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { APP_ROUTES } from './config/app-routes.config';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';
import { ProductsComponent } from './products/products.component';
import { MasterDetailCvComponent } from './cv/master-detail-cv/master-detail-cv.component';
import { cvsResolver } from './cv/resolvers/cvs.resolver';
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
  { path: 'rh', component: RhComponent },
  { path: APP_ROUTES.login, component: LoginComponent },
  { path: 'client/dossier/:element/:id', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
