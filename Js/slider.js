"use strict";

export const popular = new Splide("#popular",{
    perPage: 3,
    gap: "30px",
    breakpoints: {
        1024: {
            perPage: 1
        },
        768: {
            arrows: false,
        }
    }
})

popular.mount()