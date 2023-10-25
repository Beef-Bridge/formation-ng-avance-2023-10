// import { HttpClient } from "@angular/common/http";
// import { PostService } from "./post.service";
// import { TestBed } from "@angular/core/testing";
// import { of } from "rxjs";

// describe('PostService', () => {

//     // déclaration
//     let httpClientSpy: jasmine.SpyObj<HttpClient>;
//     let postService: PostService;
//     let postArray = [
//         { id: 1, body: 'Contenu 1', title: 'Titre 1' },
//         { id: 2, body: 'Contenu 2', title: 'Titre 2' },
//         { id: 3, body: 'Contenu 3', title: 'Titre 3' }
//     ];
//     // ---------------------------------------
//     //      before each
//     // ---------------------------------------
//     beforeEach(() => {

//         let HttpSPY = jasmine.createSpyObj('HttpClient', ['get']);

//         TestBed.configureTestingModule({
//             providers: [
//                 PostService,
//                 { provide: HttpClient, useValue: HttpSPY }
//             ]
//         });

//         postService = TestBed.inject(PostService);
//         httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
//     })

//     //   ------- specs
//     it('Le service renvoie t-il les bonnes valeurs ?',
//         (done) => {

//             httpClientSpy.get.and.returnValue(of(postArray));
//             postService.getAvis().subscribe({
//                 next:
//                     (avis) => {
//                         expect(avis).toEqual(postArray);
//                         done(); // valid
//                     },
//                 error:
//                     () => {
//                         done.fail;
//                     }
//             });
//             // expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
//         });
// });