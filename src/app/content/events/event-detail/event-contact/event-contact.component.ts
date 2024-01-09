import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-contact',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './event-contact.component.html',
  styleUrl: './event-contact.component.css'
})
export class EventContactComponent {
  today = new Date();
}
