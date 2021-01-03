import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {VideoComponent} from './video/video.component';
import {ManualComponent} from './manual/manual.component';
import {AndroidComponent} from './android/android.component';
import {CarouselComponent} from './carousel/carousel.component';

const routes: Routes = [
  {path: 'about/video', component: VideoComponent},
  {path: 'about/manual', component: ManualComponent},
  {path: 'about/android', component: AndroidComponent},
  {path: 'actions', component: CarouselComponent},
  {path: '', component: MainComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
