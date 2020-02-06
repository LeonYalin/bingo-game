import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BingoBoardsListComponent } from './bingo-boards-list.component';

describe('BingoBoardsListComponent', () => {
  let component: BingoBoardsListComponent;
  let fixture: ComponentFixture<BingoBoardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoBoardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoBoardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
