import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { SolicitacaotelaComponent } from './solicitacaotela/solicitacaotela.component';

const routes: Routes = [
  {path:"solicitacao",component: SolicitacaotelaComponent},
  {path:"reservas",component: ReservasComponent},
  {path:"",redirectTo:"/solicitacao", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
