const text = document.querySelector('#UpDownNumber');
const Down = document.querySelector('.Down');
const Up = document.querySelector('.Up');
let Val = 0;


Up.addEventListener('click', up);
function up() {
  Val++;
  text.value = Val;
}
Down.addEventListener('click', down);
function down() {
  if (Val > 0) {
    Val--;
    text.value = Val;
  }
}
