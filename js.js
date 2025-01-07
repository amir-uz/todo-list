function add (event) {
  let input = document.getElementById('input');
  let ul = document.getElementById('ul');
  if (input.value.trim()) {
  if ((event.key === 'Enter' || event.type === 'click')) {
  ul.innerHTML += '<li>${input.value}</li>';
  input.value = '';
  }
  }
  }

