# Projects related to DOM

## project link
[Click Here] (https://stackblitz.com/edit/dom-project-chaiaurcode-mhkqzc?file=index.html)

# Solution Code

## project ONE

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
