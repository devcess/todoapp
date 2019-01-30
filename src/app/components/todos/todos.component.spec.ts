import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { Todo } from 'src/app/models/Todo';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Have title Todos', () => {
    const app = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Todos');
  });
  it('Should have array Todo', () => {
    expect(component.todos).toBeTruthy()
  });
});
