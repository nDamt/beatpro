import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    setTimeout(() => {
    const video = this.bgVideo.nativeElement;
    video
      .play()
      .then(() => {
        console.log('✅ Video reproduciéndose automáticamente');
      })
      .catch((err) => {
        console.warn('⚠️ Autoplay bloqueado, esperando interacción');
      });
  }, 500); // Espera medio segundo por si el DOM aún está montando
  }
} 

