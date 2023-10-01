import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewLetterComponent } from './pages/new-letter/new-letter.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  // {
  //   pathMatch: 'full',
  //   redirectTo: '',
  //   component: NewLetterComponent,
  // },
  {
    path: '',
    component: NewLetterComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
