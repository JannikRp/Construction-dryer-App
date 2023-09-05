// tabs-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule), canActivate: [AuthGuard]
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule), canActivate: [AuthGuard]
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule), canActivate: [AuthGuard]
      },
      {
        path: '', // Dieser Pfad entspricht dem Standard-Tab, wenn 'tabs' ohne einen weiteren Pfad aufgerufen wird
        redirectTo: 'tab1', // Hier musst du den gewünschten Standard-Tab angeben
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '', // Dieser Pfad ist für den Fall, dass 'tabs' alleine aufgerufen wird
    redirectTo: 'tabs/tab1', // Hier musst du den gewünschten Standard-Tab angeben
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
