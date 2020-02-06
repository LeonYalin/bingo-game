import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bingo-header',
  templateUrl: './bingo-header.component.html',
  styleUrls: ['./bingo-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BingoHeaderComponent implements OnInit {
  @Input() gameIsRunning: boolean = false;
  @Input() boardsExist: boolean = false;
  @Output() startGameClick = new EventEmitter<void>();
  @Output() addBoardClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onStartGameClick() {
    this.startGameClick.emit();
  }

  onAddBoardClick() {
    this.addBoardClick.emit();
  }
}
