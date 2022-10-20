import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent implements OnInit {
  switch: Switch = 'light-theme';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.initializeTheme();
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.switch,
      this.switch === 'light-theme'
        ? (this.switch = 'dark-theme')
        : (this.switch = 'light-theme')
    );
  }

  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.switch);
}

export type Switch = 'light-theme' | 'dark-theme';
