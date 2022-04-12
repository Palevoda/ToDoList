// import { Injectable } from "@angular/core";

// @Injectable()
// export class ArticlesEffects {
//   @Effect()
//   loadArticles$ = this.actions$.pipe(
//     ofType(ArticlesActions.LoadArticles),
//     mergeMap(() =>
//       this.articlesService.getArticles().pipe(
//         map(
//           (articles) =>
//             new ArticlesLoadedSuccess({
//               articles: articles,
//             })
//         ),
//         catchError(() => of(new ArticlesLoadedError()))
//       )
//     )
//   );