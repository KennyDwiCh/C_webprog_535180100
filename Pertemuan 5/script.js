let btn = document.getElementById('btnCount');
        btn.addEventListener('click', () => {
            let headings = document.getElementsByTagName('h2');
            alert(`The number of H2 tags: ${headings.length}`);
        });
let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');   
let data1 = [].map.call(items, item => item.textContent);        
console.log(data1);
let elements = document.getElementsByClassName('heading-secondary');
let data2 = [].map.call(elements, elem => elem.textContent);
console.log(data2);
var btn = document.getElementById('btnRate');

        btn.addEventListener('click', () => {
            var rates = document.getElementsByName('rate');
            rates.forEach((rate) => {
                if (rate.checked) {
                    alert(`You rated: ${rate.value}`);
                }
            })
        });