import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */


  @Input()
  ticket: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  ticketHasBeenArchived: EventEmitter<boolean> = new EventEmitter<boolean>();

  status = 1;
  constructor() {
  }
  
  
  ngOnInit() {
    if(this.ticket.major == 'SI'){
      this.status = 1;
    }
    else if(this.ticket.major == 'GE'){
      this.status = 2;
    }
    else if(this.ticket.major == 'GB'){
      this.status = 3;
    }
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }

  archivedTicket() {
    this.ticketHasBeenArchived.emit(true);
  }
}
