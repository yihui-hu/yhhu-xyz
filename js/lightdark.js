const themeBtn = document.querySelector('.theme');

function getCurrentTheme(){
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  localStorage.getItem('yhhu.theme') ? theme = 
  localStorage.getItem('yhhu.theme') : null;
  return theme;
}

function loadTheme(theme){
  const root = document.querySelector(':root');
  root.setAttribute('color-scheme', `${theme}`);
}

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  if (theme === 'dark') {
      theme = 'light';
  } else {
      theme = 'dark';
  }
  localStorage.setItem('yhhu.theme', `${theme}`);
  loadTheme(theme);
})

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
})