import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects/index.effects';
import * as fromRoot from './store/reducers/index.reducer';
import { environment } from './../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<fromRoot.State>>('Registered Reducers');

export const getReducers = () => fromRoot.reducers;
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      loadChildren: './employee/employee.module#EmployeeModule'
    }]),
    StoreModule.forRoot(REDUCER_TOKEN, {
      metaReducers: !environment.production ? [storeFreeze] : []
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({}),
    BrowserAnimationsModule
  ],
  providers: [{
    provide: REDUCER_TOKEN,
    useFactory: getReducers
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
