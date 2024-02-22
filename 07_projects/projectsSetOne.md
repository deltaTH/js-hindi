# Projects related to DOM

## project link
[Click Here] (https://stackblitz.com/edit/dom-project-chaiaurcode-mhkqzc?file=index.html)

# Solution Code

## project ONE - color changer

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;

    // ab yha if laga ke bhi kar sakte, ya switch case bhi use kar sakte...
    // har baar color check kar rhe fir change kar rhe
    // like
    // if(e.target.id == 'grey'){
    // body.style.backgroundColor = e.target.id;
  });
});

```

## project TWO - bmi calculator

```javascript
const form = document.querySelector('form');
//this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## project THREE - time 

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```