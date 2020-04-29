/*
 * 1. Create a collection of 8 ducks
 *  a. split between male/female (not all the same)
 *  b. same with size
 *  c. At least 3 rubber ducks
 * 2. Print Ducks to Dom
 */

const ducks = [
  {
    color: 'Red, Gold, & White',
    name: 'Warpaint',
    breed: 'Arrowhead',
    size: 'small',
    temperment: 'fiesty',
    imageUrl: 'https://www.rallyhouse.com/assets/images/products/5770249-1.jpg',
    gender: 'male',
    age: 60,
    isRubber: true,
  },
  {
    color: 'Yellow & Green',
    name: 'MAUI',
    breed: 'Hawaiian',
    size: 'medium',
    temperment: 'relaxed',
    imageUrl: 'https://images.squarespace-cdn.com/content/59698a7d29687fd47a2a7c52/1514688638776-9Y21PCEV6DM6KVZ5A52Q/image-asset.jpeg?content-type=image%2Fjpeg',
    gender: 'male',
    age: 61,
    isRubber: true,
  },
  {
    color: 'Orange & Blue',
    name: 'AUbrey',
    breed: 'WarEagle',
    size: 'large',
    temperment: 'relaxed',
    imageUrl: 'https://epicsports.cachefly.net/images/131445/310/collegiate-auburn-4-all-star-duck-ea-.jpg',
    gender: 'female',
    age: 164,
    isRubber: true,
  },
  {
    color: 'Yellow',
    name: 'Dr. Meredith Grey',
    breed: 'general',
    size: 'small',
    temperment: 'fiesty',
    imageUrl: 'https://www.qualitylogoproducts.com/toys-and-fun/rubber-duck-doctor-hq.jpg',
    gender: 'female',
    age: 33,
    isRubber: true,
  },
  {
    color: 'Green & Brown',
    name: 'Henry VIII',
    breed: 'Mallard',
    size: 'medium',
    temperment: 'fiesty',
    imageUrl: 'https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg',
    gender: 'male',
    age: 10,
    isRubber: false,
  },
  {
    color: 'Brown',
    name: 'Elizabeth I',
    breed: 'Mallard',
    size: 'large',
    temperment: 'fiesty',
    imageUrl: 'https://www.allaboutbirds.org/guide/assets/photo/60291251-480px.jpg',
    gender: 'female',
    age: 5,
    isRubber: false,
  },
  {
    color: 'Brown & Grey',
    name: 'Mary Queen of Scots',
    breed: 'Mandarin',
    size: 'small',
    temperment: 'relaxed',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Female_Mandarin_Duck_800.jpg',
    gender: 'female',
    age: 4,
    isRubber: false,
  },
  {
    color: 'Orange, Green, Brown, & White',
    name: 'Francis II',
    breed: 'Mandarin',
    size: 'medium',
    temperment: 'relaxed',
    imageUrl: 'https://www.audubon.org/sites/default/files/styles/hero_mobile/public/nyc-mandarin-duck_holly-mascaro.jpg?itok=QAmqWXkG',
    gender: 'male',
    age: 3,
    isRubber: false,
  }
];

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
};

const buildDucks = (ducksCollection) => {
  let domString = '<div class="row">';

  for (let i = 0; i < ducks.length; i++) {
    const duck = ducksCollection[i];

    domString += '<div class="card-seperation col-md-6 col-lg-4" style="width: 18rem;">'
    domString += `<img src="${duck.imageUrl}" class="card-img-top rounded mx-auto d-block">`
    domString += '<div class="card-body">'
    domString += `<h5 class="card-title">${duck.name}</h5>`
    domString += '<ul class="list-group list-group-flush">'
    domString += `<li class="list-group-item">Age: ${duck.age}</li>`
    domString += `<li class="list-group-item">Gender: ${duck.gender}</li>`
    domString += `<li class="list-group-item">Breed: ${duck.breed}</li>`
    domString += `<li class="list-group-item">Size: ${duck.size}</li>`
    domString += `<li class="list-group-item">Temperment: ${duck.temperment}</li>`
    domString += '</ul>'
    domString += '</div>'
    domString += '</div>';
}

domString += '</div>';

  printToDom('#duckContainer', domString);
};

const filterDucks = (event) => {
  const buttonId = event.target.id;

  if (buttonId === 'all') {
    buildDucks(ducks);
    return;
  }

  const key = event.target.attributes['data-filter'].value;
  const duckies = [];

  for (let i = 0; i < ducks.length; i++) {
    const duck = ducks[i];
    if (buttonId === 'rubber' && !duck.isRubber) {
      duckies.push(duck);
    } 

    if (duck[key] === buttonId) {
      duckies.push(duck);
    }
  }

  buildDucks(duckies);
};

const clickEvents = () => {
  document.querySelector('#small').addEventListener('click', filterDucks);
  document.querySelector('#medium').addEventListener('click', filterDucks);
  document.querySelector('#large').addEventListener('click', filterDucks);
  document.querySelector('#male').addEventListener('click', filterDucks);
  document.querySelector('#female').addEventListener('click', filterDucks);
  document.querySelector('#rubber').addEventListener('click', filterDucks);
  document.querySelector('#all').addEventListener('click', filterDucks);
};

const init = () => {
  buildDucks(ducks);
  clickEvents();
};

init();
