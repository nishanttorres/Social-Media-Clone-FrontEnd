import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUsersToFollowComponent } from './search-users-to-follow.component';

describe('SearchUsersToFollowComponent', () => {
  let component: SearchUsersToFollowComponent;
  let fixture: ComponentFixture<SearchUsersToFollowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchUsersToFollowComponent]
    });
    fixture = TestBed.createComponent(SearchUsersToFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
