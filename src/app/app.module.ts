import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {MainComponent} from './main/main.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {VideoComponent} from './video/video.component';
import {ManualComponent} from './manual/manual.component';
import {AndroidComponent} from './android/android.component';
import {SocialComponent} from './social/social.component';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';
import {NguCarouselModule} from '@ngu/carousel';
import {CarouselComponent} from './carousel/carousel.component';
import {FormsModule} from '@angular/forms';
import {AdditionalNavbarComponent} from './additional-navbar/additional-navbar.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';


// AoT requires an exported function for factories
// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    PageNotFoundComponent,
    VideoComponent,
    ManualComponent,
    AndroidComponent,
    SocialComponent,
    CarouselComponent,
    AdditionalNavbarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NguCarouselModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    ),
    FormsModule,
    VgCoreModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
