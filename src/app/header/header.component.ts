import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet],
  template: `test`,
})
export class HeaderComponent {
  title = 'test-app';
}
