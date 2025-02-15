// Initialize keyboard
let keyboard = new SimpleKeyboard.default({
  onChange: input => {
    document.getElementById("text-input").value = input;
  },
  onKeyPress: button => {
    if (button === "{bksp}") {
      let inputField = document.getElementById("text-input");
      inputField.value = inputField.value.slice(0, -1);
      keyboard.setInput(inputField.value);
    }
  },
  layout: {
    'default': [
      'q w e r t y u i o p',
      'a s d f g h j k l',
      'z x c v b n m {bksp}'
    ],
    'numeric': [
      '1 2 3',
      '4 5 6',
      '7 8 9',
      '0 {bksp}'
    ],
    'azerty': [
      'a z e r t y u i o p',
      'q s d f g h j k l m',
      'w x c v b n {bksp}'
    ]
  }
});

// Change keyboard layout dynamically
document.getElementById('layout-selector').addEventListener('change', function() {
  keyboard.setOptions({
    layoutName: this.value
  });
});
