const button = document.getElementById('clicker'); // strictNullChecks is true, it will need "!"

// button handler
if (button) {
  button.addEventListener('click', () => {
    console.log('Clicked!!');
  });
}
