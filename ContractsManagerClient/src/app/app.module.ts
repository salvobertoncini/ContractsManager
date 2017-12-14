import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// Import Angular core libraries
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Import routing libraries
import {RouterModule, Routes} from '@angular/router';

// Import for sending GET and SET request
import {HttpModule} from '@angular/http';

// Import all components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Import Services
import {AuthGuard} from './_services/security/auth.guard';
import {AuthService} from './_services/security/auth.service';
import {AlertService} from './_services/alert/alert.service';
import {PagerService} from './_services/pagination/pager.service';
import {HttpSerService} from './_services/http/http-ser.service';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MostraContrattiUserComponent } from './mostra-contratti-user/mostra-contratti-user.component';
import { NuovoContrattoWebComponent } from './nuovo-contratto-web/nuovo-contratto-web.component';

// Array with all routing paths
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'nuovo-contratto-web', component: NuovoContrattoWebComponent},
  {path: 'mostra-contratti-user', component: MostraContrattiUserComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ToolbarComponent,
    MostraContrattiUserComponent,
    NuovoContrattoWebComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpSerService,
    PagerService,
    AlertService,
    AuthService,
    AuthGuard
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
