import {
    animation,
    trigger, 
    animateChild, 
    group,
    transition, 
    animate, 
    style, 
    query,
    state
  } from '@angular/animations';
  
  export const bottomErrorTransistion =trigger('errorHideShow', [
      state('err-open', style({
         opacity: 1,
         height:'100%',
         display: 'block',
         visibility: 'visible',
         animationDuration: '.5s',
         animationDelay: '.5s',
         minHeight: '19px'
      })),
      state('err-hide', style({
        display: 'none',
        visibility: 'hidden',
        height:'0px',
        minHeight: '0px',
        opacity: 0,
        animationDuration: '.5s',
        animationDelay: '.5s'
       })),
      transition('err-open => err-hide', [
        animate('.5s')
      ]),
      transition('err-hide => err-open', [
        animate('.5s')
      ]),
      transition('* => err-hide', [
        animate('.5s')
      ]),
      transition('* => err-open', [
        animate('0.5s')
      ]),
      transition('err-open <=> err-hide', [
        animate('0.5s')
      ]),
      transition ('* => err-open', [
        animate ('.5s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ])

  export const transAnimation = animation([
    style({
      height: '{{ height }}',
      opacity: '{{ opacity }}',
      backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
  ]);
  
  // Routable animations
  export const slideInAnimation =
    trigger('routeAnimations', [
      transition('HomePage <=> AboutPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%'}))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%'}))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('* <=> FilterPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('200ms ease-out', style({ left: '100%'}))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%'}))
          ])
        ]),
        query(':enter', animateChild()),
      ])
    ]);
  
  
  /*
  Copyright 2017-2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */