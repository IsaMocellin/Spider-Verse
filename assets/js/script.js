function handMouseEnter(){
  this.classList.add('s-card--houvered');
  document.body.id = `${this.id}-houvered`;
}

function handMouseLeave(){
  this.classList.remove('s-card--houvered');
  document.body.id= '';
}

function addEventListenersToCards(){
  const cardElements = document.getElementsByClassName('s-card');
  console.log(cardElements);

  for (let i = 0; i < cardElements.length; i++){
    const card = cardElements[i];
    card.addEventListener('mouseenter', handMouseEnter);
    card.addEventListener('mouseleave', handMouseLeave);
  }
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement){
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-card-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -90 * (Number(selectedItem) -1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  
  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}
