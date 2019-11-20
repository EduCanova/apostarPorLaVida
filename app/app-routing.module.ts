import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { auth } from 'firebase';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'fundacion', loadChildren: './pagina/fundacion/fundacion.module#FundacionPageModule' },
  { path: 'ayudar', loadChildren: './pagina/ayudar/ayudar.module#AyudarPageModule' },
  { path: 'campagna', loadChildren: './pagina/campagna/campagna.module#CampagnaPageModule' },
  { path: 'unirse', loadChildren: './pagina/unirse/unirse.module#UnirsePageModule' },
  { path: 'ingresar', loadChildren: './pagina/ingresar/ingresar.module#IngresarPageModule', canActivate: [LoginGuard] },
  { path: 'administra', loadChildren: './administrador/administra/administra.module#AdministraPageModule',canActivate: [AuthGuard] },
  { path: 'ncampa', loadChildren: './administrador/ncampa/ncampa.module#NcampaPageModule' ,canActivate: [AuthGuard] },
  { path: 'detalles', loadChildren: './administrador/detalles/detalles.module#DetallesPageModule',canActivate: [AuthGuard] },
  { path: 'detalles/:id', loadChildren: './administrador/detalles/detalles.module#DetallesPageModule',canActivate: [AuthGuard] },
  { path: 'detalles-ayuda', loadChildren: './pagina/detalles-ayuda/detalles-ayuda.module#DetallesAyudaPageModule' },
  {path: 'detalles-ayuda/:id', loadChildren: './pagina/detalles-ayuda/detalles-ayuda.module#DetallesAyudaPageModule' },
  { path: 'voluntario', loadChildren: './administrador/voluntario/voluntario.module#VoluntarioPageModule', canActivate: [AuthGuard] },
  { path: 'donacion', loadChildren: './administrador/donacion/donacion.module#DonacionPageModule', canActivate: [AuthGuard] },
  { path: 'donacion-detalle', loadChildren: './administrador/donacion-detalle/donacion-detalle.module#DonacionDetallePageModule', canActivate: [AuthGuard] },
  { path: 'donacion-detalle/:id', loadChildren: './administrador/donacion-detalle/donacion-detalle.module#DonacionDetallePageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
