import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/model/pokemonDta';
import { PokemonServicesService } from 'src/app/services/pokemon-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData = {
    id :0 ,
    name: "",
    sprites:{
      front_default:''
    },
    types:[{
      slot:0,
      type:{
        name:'',
        url:''
      }

    }]
  }


  constructor(private service:PokemonServicesService) { }

  ngOnInit(): void {
 this.getPokemon("pikachu")
  }
 getPokemon(searName:string){
  this.service.getPokemon(searName).subscribe(
    {
      next :(res) =>
      {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
        console.log(res)
        console.log(this.pokemon)
        console.log(this.pokemon.types)

      },
      error:(err) => console.log(err)
    }
  )
 }
}
