import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from '../Models/pokemon-details.model';
import { ApiService } from '../services/api.service';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
    pokmns: any = {};
    details: any = {name: ''};
    nombre = '';
    name = '';
    base_experience = '';
    weight = '';
    height = '';
    id = '';
    pokemonDetails!: PokemonDetails;
    @Input('pokemon') pokemon: any = { name: '', type: ''};
    constructor(
        private apiService: ApiService,
        private activatedRoute: ActivatedRoute, 
        private service: CharactersService
        ) {}

    ngOnInit(): void {
        this.name = this.activatedRoute.snapshot.params['name'];
        // this.apiService.getPokemonByName(this.name).subscribe(result => this.details = result)
        this.service.getCharacterByName(this.name).subscribe(result => this.details = result);
        this.service.getCharacterByName(this.name).subscribe(result => {this.pokemonDetails = result; });
        
    }
}


