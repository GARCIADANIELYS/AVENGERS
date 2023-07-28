import { NgStyle } from '@angular/common';
import { literalMap } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public mouseOver = () => {
    console.log('funciona');
  }
}