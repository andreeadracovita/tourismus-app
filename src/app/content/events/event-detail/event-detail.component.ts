import { Component } from '@angular/core';
import { EventDescriptionComponent } from './event-description/event-description.component';
import { EventContactComponent } from './event-contact/event-contact.component';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [
    EventDescriptionComponent,
    EventContactComponent
  ],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent {

}
