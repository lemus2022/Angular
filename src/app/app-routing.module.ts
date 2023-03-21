import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeaturesComponent } from './components/features/features.component';



const routes: Routes = [
    { path: 'home', component: PokeListComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'pokemon-details/:name', component: PokemonDetailsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: ErrorpageComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
