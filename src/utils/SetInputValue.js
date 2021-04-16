
export function SetInputValueByName(name, newValue) {
  var $input = document.querySelector(`input[name="${name}"]`);
  $input.value = newValue;
}

export function ChangeInputType(name, newValue) {
  var $input = document.querySelector(`input[name="${name}"]`);
  $input.type = newValue;
}

export function SetSelectValueByName(name, newValue) {
  var $input = document.querySelector(`select[name="${name}"]`);
  $input.value = newValue;
}