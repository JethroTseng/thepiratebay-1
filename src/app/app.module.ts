import { StripunsafePipe } from './pipes/stripunsafe.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PiratebayService } from './services/piratebay.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TorrentComponent} from './components/torrents/torrent.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DisplayComponent } from './components/display/display.component';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { ConvertPipe } from './pipes/convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TorrentComponent,
    NavbarComponent,
    DisplayComponent,
    ConvertPipe,
    StripunsafePipe
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    AngularFontAwesomeModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [PiratebayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
