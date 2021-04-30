
export function SetInputValueByName(name, newValue) {
  var $input = document.querySelector(`input[name="${name}"]`);
  if ($input){
    $input.value = newValue;
  }
}

export function ChangeInputType(name, newValue) {
  var $input = document.querySelector(`input[name="${name}"]`);
  if ($input){
    $input.type = newValue;
  }
}

export function SetSelectValueByName(name, newValue) {
  var $input = document.querySelector(`select[name="${name}"]`);
  if ($input){
    $input.value = newValue;
  }
}