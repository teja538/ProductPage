import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayitComponent } from './playit.component';

describe('PlayitComponent', () => {
  let component: PlayitComponent;
  let fixture: ComponentFixture<PlayitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
