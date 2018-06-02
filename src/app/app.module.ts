import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicAssigment1Component } from './components/basic-assigment-1/basic-assigment-1.component';
import { SuccessAlertComponent } from './components/basic-assigment-1/success-alert/success-alert.component';
import { WarningAlertComponent } from './components/basic-assigment-1/warning-alert/warning-alert.component';
import { BasicAssigment2Component } from './components/basic-assigment-2/basic-assigment-2.component';
import { BasicAssigment3Component } from './components/basic-assigment-3/basic-assigment-3.component';
import { ServerComponent } from './components//server-console-1/server/server.component';
import { ServersComponent } from './components/server-console-1//servers/servers.component';
import { ServersConsoleComponent } from './components/server-console-1/servers-console/servers-console.component';
import { ServerConsole2Component } from './components/server-console-2/server-console-2.component';
import { CockpitComponent } from './components/server-console-2/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-console-2/server-element/server-element.component';
import { AssigmentCmpDatabindingComponent } from './components/assigment-cmp-databinding/assigment-cmp-databinding.component';
import { GameControlComponent } from './components/assigment-cmp-databinding/game-control/game-control.component';
import { OddComponent } from './components/assigment-cmp-databinding/odd/odd.component';
import { EvenComponent } from './components/assigment-cmp-databinding/even/even.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { BasicHighlightDirective } from './components/directives/basic-highlight/basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicAssigment1Component,
    SuccessAlertComponent,
    WarningAlertComponent,
    BasicAssigment2Component,
    BasicAssigment3Component,
    ServerComponent,
    ServersComponent,
    ServersConsoleComponent,
    ServerConsole2Component,
    CockpitComponent,
    ServerElementComponent,
    AssigmentCmpDatabindingComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DirectivesComponent,
    BasicHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
