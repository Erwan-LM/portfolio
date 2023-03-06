const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#fff';
    link.style.color = '#333';
  });
  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = 'transparent';
    link.style.color = '#fff';
  });
});
