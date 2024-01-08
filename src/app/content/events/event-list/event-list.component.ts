import { Component } from '@angular/core';
import { EventItemComponent } from './event-item/event-item.component';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    EventItemComponent
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

}
