console.log('Loaded!');

// change the text of main-text div

var element = document.getElementById('main-text');
element.innerHTML='New Value';

var img = document.getElementById('madi');
img.onclick = function() {
  img.style.margininLeft = '100px';  
};