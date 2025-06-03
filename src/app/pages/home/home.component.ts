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

    // Asegúrate de que el video esté configurado correctamente
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.loop = true;

    // Forzar reproducción
    video.load(); // ⚠️ Esto reinicia el video y ayuda si no ha sido cargado aún
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
