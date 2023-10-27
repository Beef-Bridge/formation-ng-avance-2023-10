import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuComponent } from './tu.component';
import { Exo1Component } from '../child-component1/exo1.component';


// describe crée un objet de test
describe('TuComponent', () => {
  let component: TuComponent;
  let fixture: ComponentFixture<TuComponent>;



  beforeEach(() => {
    // TestBed permet de créé un environnement de test
    TestBed.configureTestingModule({
      declarations: [
        TuComponent,
        Exo1Component // ajout d'un nouveau composant dans l'environnement de test
      ]
    });
    fixture = TestBed.createComponent(TuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // un objet de tests peut contenir plusieurs spécifications (it)
  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
