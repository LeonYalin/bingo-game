import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-bingo-drawn-numbers',
  templateUrl: './bingo-drawn-numbers.component.html',
  styleUrls: ['./bingo-drawn-numbers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('scale', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('200ms', style({ transform: 'scale(1)' })),
      ])
    ]),
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms', style({ opacity: 1 })),
      ])
    ]),
  ]
})
export class BingoDrawnNumbersComponent implements OnInit {
  @Input() drawnNumbers: number[];

  constructor() { }

  ngOnInit() {
  }

}
