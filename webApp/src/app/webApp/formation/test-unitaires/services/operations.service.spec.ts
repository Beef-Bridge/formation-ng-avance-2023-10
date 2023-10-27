import { TestBed } from "@angular/core/testing";
import { OperationsService } from "./operations.service";
import { WarnService } from "./warn.service";

// Création de l'objet de Test
describe('Test Injection de dépendances', () => {
  // ---------------------------------------------------
  // Zone de déclarations de variables - const - objets
  // ---------------------------------------------------
  let MockWarn: any;
  let operations: any;
  // ---------------------------------------------------------------------
  // traitement spécifiques communs (beforeEach - AfterEach - beforeAll)
  // ---------------------------------------------------------------------
  beforeEach(() => {
    MockWarn = jasmine.createSpyObj('WarnService', ['warnMessage','logErreur']);
    // ---------------------------------------------------------------------
    // Création d'un Objet complet de test et de simulation : TESTBED
    // Créons une vraie injection de dépendances avec les providers
    // ---------------------------------------------------------------------
    TestBed.configureTestingModule({
      providers: [
        // injection de dépendances
        OperationsService,
        {
          provide: WarnService,
          // on n'utilise pas la méthode de WarnService
          // mais la méthode du Mock ('warnMessage', 'logErreur')
          useValue: MockWarn
        }
      ]
    });
    // --------------------------------------------
    operations = TestBed.inject(OperationsService);
    // --------------------------------------------
  });
  // ----------------------------
  //   liste des spécifications
  // ----------------------------
  it('Ajouter 2 nombres OK ?', () => {
    const resultat = operations.ajouter(10, 5);
    expect(resultat).withContext('--- Erreur Expectation ---').toBe(15);
    expect(MockWarn.warnMessage).toHaveBeenCalledTimes(1);
  });

  it('Soustraire 2 nombres OK ?', () => {
    const resultat = operations.soustraire(10, 5);
    expect(resultat).withContext('--- Erreur Expectation ---').toBe(5);
  });


})
