import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'pokeheight'
})

export class PokemonHeightPipe implements PipeTransform {

    transform(value: number, args?: any): string {
      return value/10 + 'm';
    }
  
  }