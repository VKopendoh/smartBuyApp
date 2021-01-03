import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {NguCarousel, NguCarouselConfig} from '@ngu/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) {
  }

  name = 'Angular';
  slideNo = 1;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;

  @ViewChildren('linkRef') linkRefs;
  carouselConfig: NguCarouselConfig = {
    grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    load: 4,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  };

  items = [
    {title: 'Slide One', src: '/assets/images/carousel/smrtBuyPIC.png'},
    {title: 'Slide Two', src: '/assets/images/carousel/IMG_2.JPG'},
    {title: 'Slide Three', src: '/assets/images/carousel/IMG_3.JPG'},
    {title: 'Slide Four', src: '/assets/images/carousel/IMG_4.JPG'},
    {title: 'Slide Five', src: '/assets/images/carousel/IMG_5.JPG'},
    {title: 'Slide Six', src: '/assets/images/carousel/IMG_7.JPG'}
  ];

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  reset(): void {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide): void {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

  ngOnInit(): void {
  }
}

