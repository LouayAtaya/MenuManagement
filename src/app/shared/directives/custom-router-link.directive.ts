import { Directive, Input, Optional, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { timeout } from 'rxjs';

@Directive({
  selector: '[externalLink]'
})
export class CustomRouterLinkDirective implements OnInit {

  @Input() externalLink: string;


  constructor(@Optional() private link: RouterLinkWithHref) {



  }


  ngOnInit(): void {
    if (!this.link) {
      return;
    }

    // Save original onClick method
    const onClick = this.link.onClick;

    // Replace method with our own 
    this.link.onClick = (...args: any[]) => {
      if (this.externalLink && this.externalLink.trim().length != 0) {
        // Process external url
        window.open(this.externalLink, '_blank');
        return false;
      } else {
        // Process internal url by calling routerLink original method
        return onClick.apply(this.link, args);
      }
    }
  }


}