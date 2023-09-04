import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: "auth",
    loadChildren: () => import("./auth/auth.module")
      .then(m => m.AuthModule),
    title: "e-hianatra | authentification"
  },
  {
    path: "devices",
    loadChildren: () => import("./devices/devices.module")
      .then(m => m.DevicesModule),
      title: "e-hianatra | devices"
  },
  {
    path: "**", redirectTo: "/auth", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
