
export default function SetInputValueByName(name, newValue) {
  var $input = document.querySelector(`input[name="${name}"]`);
  $input.value = newValue;
}