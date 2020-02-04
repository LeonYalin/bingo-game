import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoGameContentComponent } from './bingo-game-content.component';

describe('BingoGameContentComponent', () => {
  let component: BingoGameContentComponent;
  let fixture: ComponentFixture<BingoGameContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoGameContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoGameContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
