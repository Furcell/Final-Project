"use strict";

const contactAccordionItems = document.querySelectorAll('.contact-accordion .accordion-item');

contactAccordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');


  header.addEventListener('click', () => {
    item.querySelector('.accordion-content').classList.toggle('active');

    const chevron = header.querySelector('i');
    chevron.classList.toggle('rotate');
  });
});

export {contactAccordionItems};