//menampilkan teks yang diketik pada kolom Search di atas slider
const inputSearch = document.querySelector('#quiz-search');
const tooltip = document.querySelector('#input-tooltip');
const preview = document.querySelector('#input-preview');
 
inputSearch.addEventListener('input', (event) => {
  preview.textContent = event.target.value;
 
  if (event.target.value === '') {
    tooltip.style.display = 'none';
  } else {
    tooltip.style.display = 'block';
  }
});