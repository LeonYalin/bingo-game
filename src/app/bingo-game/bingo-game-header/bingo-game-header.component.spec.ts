import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoGameHeaderComponent } from './bingo-game-header.component';

describe('BingoGameHeaderComponent', () => {
  let component: BingoGameHeaderComponent;
  let fixture: ComponentFixture<BingoGameHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoGameHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoGameHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
