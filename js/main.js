let input = prompt('Введите число')
let blocks = document.querySelector('.blocks')

for (let i = 0; i < input; i++) {
    blocks.insertAdjacentHTML('beforeend', "<div class = 'box'> " + (i+1) + " </div>")
}