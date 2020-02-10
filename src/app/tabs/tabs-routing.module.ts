import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'signup',
        loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule)
      },
      {
        path: 'message',
        loadChildren: () => import('../message/message.module').then( m => m.MessagePageModule)
      },
      { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},

      {
        path: '',
        redirectTo: '/tabs/message'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
