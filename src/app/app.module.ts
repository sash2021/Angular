import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TestcomptodeleteComponent } from './testcomptodelete/testcomptodelete.component';
import { CompanyComponent } from './SME/company/company.component';
import { CtsComponent } from './SME/cts/cts.component';
import { WiproComponent } from './SME/wipro/wipro.component';
import { TcsComponent } from './SME/tcs/tcs.component';
import { NotFound404ComponentComponent } from './not-found404-component/not-found404-component.component';
import { TaskmanagerComponent } from './todo/taskmanager/taskmanager.component';
import { InBuiltDirectiveComponentComponent } from './directive/in-built-directive-component/in-built-directive-component.component';
import { SetbagDirective } from './directive/customdirective/setbag.directive';
import { MypipecomponentComponent } from './inbuiltpipes/mypipecomponent/mypipecomponent.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ModelformComponent } from './forms/modelform/modelform.component';

import {CustomLocalService} from './services/custom-local.service';
import { ConsumeService1Component } from './consumeServices/consume-service1/consume-service1.component';
import { ConsumeService2Component } from './consumeServices/consume-service2/consume-service2.component';
import { ConsumeRemoteServiceComponent } from './consumeservices/consume-remote-service/consume-remote-service.component';
import { UserDetailComponent } from './userDetail/user-detail/user-detail.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AnimateTextComponent } from './animation/animate-text/animate-text.component';
import { GrandFatherComponent } from './input-output/grand-father/grand-father.component';
import { FatherComponent } from './input-output/father/father.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '../../node_modules/@angular/compiler/src/core';

const myRoutes: Routes = [
  {
    path: '',
    component: TaskmanagerComponent,
    pathMatch: 'full'
  },
  {
    path: 'companies',
    component: CompanyComponent,
    children: [
      {
      path: 'cts',
      component: CtsComponent
    },
    {
      path: 'wipro',
      component: WiproComponent
    },
    {
      path: 'tcs',
      component: TcsComponent
    }
  ]
  },
  {
    path: 'todo',
    component: TaskmanagerComponent
  },
  {
    path: 'directive',
    component: InBuiltDirectiveComponentComponent
  },
  {
    path: 'inbuiltpipe',
    component: MypipecomponentComponent
  },
  {
    path: 'templateform',
    component: TemplateformComponent
  },
  {
    path: 'modelform',
    component: ModelformComponent
  },
  {
    path: 'consumeService1',
    component: ConsumeService1Component
  },
  {
    path: 'consumeService2',
    component: ConsumeService2Component
  },
  {
    path: 'EmployeeList',
    component: EmployeeListComponent
  },
  {
    path: 'EmployeeDetails',
    component: EmployeeDetailsComponent
  },
  {
    path: 'Animate',
    component: AnimateTextComponent
  },
  {
    path: 'inputoutput',
    component: GrandFatherComponent
  },
  {
    path: 'consumeRemoteService',
    component: ConsumeRemoteServiceComponent,
    children: [
      {
        path: ':id',
        component: UserDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFound404ComponentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestcomptodeleteComponent,
    CompanyComponent,
    CtsComponent,
    WiproComponent,
    TcsComponent,
    NotFound404ComponentComponent,
    TaskmanagerComponent,
    InBuiltDirectiveComponentComponent,
    SetbagDirective,
    MypipecomponentComponent,
    TemplateformComponent,
    ModelformComponent,
    ConsumeService1Component,
    ConsumeService2Component,
    ConsumeRemoteServiceComponent,
    UserDetailComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    AnimateTextComponent,
    GrandFatherComponent,
    FatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    EmployeeService,
    CustomLocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
