import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PixieHighchartsModule, HighchartsStatic } from 'pixie-highcharts';

declare var require: any;

export function highchartsFactory() {
  const hc = require('highcharts');

  const hcm = require('highcharts/highcharts-more');
  const hs = require('highcharts/modules/stock');
  const dd = require('highcharts/modules/drilldown');
  const dde = require('highcharts/modules/exporting');
  const hm = require('highcharts/modules/heatmap');
  const tm = require('highcharts/modules/treemap');
  const ed = require('highcharts/modules/export-data');
  const oe = require('highcharts/modules/offline-exporting');
  const bst = require('highcharts/modules/boost');

  hcm(hc);
  hs(hc);
  dd(hc);
  dde(hc);
  hm(hc);
  tm(hc);
  ed(hc);
  oe(hc);
  bst(hc);

  return hc;
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PixieHighchartsModule,
    HighchartsStatic,
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory,
    },
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
