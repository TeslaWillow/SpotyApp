import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ArtistComponent } from './pages/artist/artist.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class FeatureRoutingModule {}
