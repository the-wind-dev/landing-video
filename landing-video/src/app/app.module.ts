import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { API_SERVER_PATH } from './ui/shared/tokens';
import { VideoContentModule } from './ui/video-content/video-content.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    VideoContentModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: API_SERVER_PATH,
      useValue: "http://localhost:3000"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
