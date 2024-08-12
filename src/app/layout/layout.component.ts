import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'codebyateai-layout',
  standalone: true,
  imports: [HeroComponent, ContactComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
