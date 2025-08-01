import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.bgVideo.nativeElement;

    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.loop = true;

    video.load(); 
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('✅ Video reproducido');
        })
        .catch((err) => {
          console.warn('⚠️ Error en autoplay:', err);
        });
    }
  }
}
