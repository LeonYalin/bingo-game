import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoDrawnNumbersComponent } from './bingo-drawn-numbers.component';

describe('BingoDrawnNumbersComponent', () => {
  let component: BingoDrawnNumbersComponent;
  let fixture: ComponentFixture<BingoDrawnNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoDrawnNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoDrawnNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
