import { Avengers } from './../interfaces/avengers';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public avengers: Avengers[] = [
  {
    hero: 'Spider-Man',
    name: 'Peter Benjamin Parker',
    link: 'http://marvel.com/characters/54/spider-man',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg',
    isActive: false
  },
  {
    hero: 'Scarlet Witch',
    name: 'Wanda Maximoff',
    link: 'https://www.marvel.com/characters/scarlet-witch-wanda-maximoff',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg',
    isActive: false
  },
  {
    hero: 'Hulk',
    name: 'Robert Bruce Banner',
    link: 'http://marvel.com/characters/25/hulk',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg',
    isActive: false
  },
  {
    hero: 'Black Widow',
    name: "Natalia Alianovna Romanova",
    link: 'http://marvel.com/characters/6/black_widow',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg',
    isActive: false
  },
  {
    hero: 'Doctor Strange',
    name: 'Stephen Strange',
    link: 'https://www.marvel.com/characters/doctor-strange-stephen-strange',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_crd_02.jpg',
    isActive: false
  },
  {
    hero: 'Captain America',
    name: 'Steven Rogers',
    link: 'http://marvel.com/characters/8/captain_america',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg',
    isActive: false
  },
  {
    hero: 'Iron Man',
    name: "Anthony Edward 'Tony' Stark",
    link: 'http://marvel.com/characters/29/iron_man',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg',
    isActive: false
  },
  {
    hero: 'Thor',
    name: 'Thor Odinson',
    link: 'http://marvel.com/characters/60/thor',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg',
    isActive: false
  },
  {
    hero: 'Spider-Man',
    name: 'Peter Benjamin Parker',
    link: 'http://marvel.com/characters/54/spider-man',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg',
    isActive: false
  },
  {
    hero: 'Scarlet Witch',
    name: 'Wanda Maximoff',
    link: 'https://www.marvel.com/characters/scarlet-witch-wanda-maximoff',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg',
    isActive: false
  },
  {
    hero: 'Hulk',
    name: 'Robert Bruce Banner',
    link: 'http://marvel.com/characters/25/hulk',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg',
    isActive: false
  },
  {
    hero: 'Black Widow',
    name: "Natalia Alianovna Romanova",
    link: 'http://marvel.com/characters/6/black_widow',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg',
    isActive: false
  },
  {
    hero: 'Doctor Strange',
    name: 'Stephen Strange',
    link: 'https://www.marvel.com/characters/doctor-strange-stephen-strange',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_crd_02.jpg',
    isActive: false
  },
  {
    hero: 'Captain America',
    name: 'Steven Rogers',
    link: 'http://marvel.com/characters/8/captain_america',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg',
    isActive: false
  },
  {
    hero: 'Iron Man',
    name: "Anthony Edward 'Tony' Stark",
    link: 'http://marvel.com/characters/29/iron_man',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg',
    isActive: false
  },
  {
    hero: 'Thor',
    name: 'Thor Odinson',
    link: 'http://marvel.com/characters/60/thor',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg',
    isActive: false
  },
  {
    hero: 'Spider-Man',
    name: 'Peter Benjamin Parker',
    link: 'http://marvel.com/characters/54/spider-man',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg',
    isActive: false
  },
  {
    hero: 'Scarlet Witch',
    name: 'Wanda Maximoff',
    link: 'https://www.marvel.com/characters/scarlet-witch-wanda-maximoff',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg',
    isActive: false
  },
  {
    hero: 'Hulk',
    name: 'Robert Bruce Banner',
    link: 'http://marvel.com/characters/25/hulk',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg',
    isActive: false
  },
  {
    hero: 'Black Widow',
    name: "Natalia Alianovna Romanova",
    link: 'http://marvel.com/characters/6/black_widow',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg',
    isActive: false
  },
];

public activeElements: number = 0;

activeItem = (index: number) => {
  this.avengers[index].isActive = !this.avengers[index].isActive;
  
  if(this.avengers[index].isActive){
    this.activeElements++;
  }else{
    this.activeElements--;
  };
}
}
