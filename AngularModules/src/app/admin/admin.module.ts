import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserService} from './services/user.service';
import {GroupService} from './services/group.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [UserComponent, GroupComponent, DashboardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule
  ],
  providers: [UserService, GroupService]
})
export class AdminModule { }
