const executionFizzBuzz = () => {
  const fizzNum = document.getElementById('input-fizz').value;
  const buzzNum = document.getElementById('input-buzz').value;

  const ul = document.getElementById('list');
  ul.innerHTML = '';
  const createListItem = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  };
  if (isNaN(fizzNum) || isNaN(buzzNum)) {
    ul.innerHTML = '整数値を入力して下さい';
    return;
  }

  for (let i = 1; i <= 99; i++) {
    if (i % fizzNum === 0 && i % buzzNum === 0) {
      createListItem(`FizzBuzz ${i}`);
    } else if (i % fizzNum === 0) {
      createListItem(`Fizz ${i}`);
    } else if (i % buzzNum === 0) {
      createListItem(`Buzz ${i}`);
    }
  }
};
