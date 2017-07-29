import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute, Params }   from '@angular/router';

import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'member/:id',
        component: MemberComponent
      },
      {
        path: 'member/',
        component: MemberComponent
      },
      {
        path: 'team',
        component: TeamComponent
      }

    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
