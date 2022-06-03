import { animate, state, style, transition, trigger } from '@angular/animations';

export const fundido = 
    trigger('componentAnimation',[
        state('*', style({
            opacity:1
        })),
        transition(':enter',[
            style({
                opacity:0
            }),
            animate('50ms linear')
        ]),
        transition(':leave',[
            animate('50ms linear',style({
                opacity:0
            }))
        ])
    ]
    )