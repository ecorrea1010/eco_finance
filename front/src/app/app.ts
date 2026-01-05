import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LucideAngularModule, Bolt, Menu, PanelLeftClose } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Eco Finance');
  protected readonly collapsed = signal(true);
  readonly boltIcon = Bolt;
  readonly MenuIcon = Menu;
  readonly CloseIcon = PanelLeftClose;

  protected toggleMenu() {
    this.collapsed.update(v => !v);
  }
}
