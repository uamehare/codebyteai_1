import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap'
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.from(".hero h1", {
      x: 100,
      duration: 1,
    })
  }
  title = 'codebyteai';
}
