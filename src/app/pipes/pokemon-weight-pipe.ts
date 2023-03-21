import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'pokeweight'
})

export class PokemonWeightPipe implements PipeTransform {

    transform(value: number, args?: any): string {
      return value/10 + ' Kg';
    }
  
  }