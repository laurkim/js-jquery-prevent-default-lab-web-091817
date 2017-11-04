$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function submitForm() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    const item = $('#item').val();
    const list = $('ol');
    list.append(`<li>${item}</li>`);
  })
}
