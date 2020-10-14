const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

const person = {
  'first-name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]: '...',
  greet() {
    // eslint-disable-next-line no-alert
    alert('Hi There');
  },
  1.5: 'hello',
};

// person.greet();
delete person.age;

person.isAdmin = true;

const KEY_NAME = 'first-name';
// eslint-disable-next-line no-console
console.log(person[KEY_NAME]);
