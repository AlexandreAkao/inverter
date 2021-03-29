const inputWord = document.getElementById('word-input');
const inverterWord = document.getElementById('word-inverted');

inputWord.addEventListener('input', event => {
  let { value } = event.target;
  value = value === '' ? 'Write to invert' : value;
  inverterWord.innerText = value;
})

const onChangeInput = (value) => {
  console.log(value);
}