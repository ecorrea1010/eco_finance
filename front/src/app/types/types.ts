import { Component } from '@angular/core';
import { LucideAngularModule, Plus} from 'lucide-angular';

@Component({
  selector: 'app-types',
  imports: [LucideAngularModule],
  templateUrl: './types.html',
  styleUrl: './types.css',
})
export class Types {
  readonly plusIcon = Plus;
}
