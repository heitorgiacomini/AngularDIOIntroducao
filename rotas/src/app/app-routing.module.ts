import { CardComponent } from './pages/portifolio/card/card.component';
import { TitleComponent } from './pages/index/title/title.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TitleComponent, pathMatch: 'full' },
  {path: 'portfolio/:id', component: CardComponent, pathMatch: 'prefix' },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
