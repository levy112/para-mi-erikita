onload = () => {
  document.body.classList.remove("container");
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");

      const titleText = 'I LOVE YOU'; // Texto que quieres mostrar
      const titleElement = document.getElementById('title');
      titleElement.innerHTML = ''; // Limpia el contenido previo (por si acaso)
      let index = 0;

      function appendTitle() {
          if (index < titleText.length) {
              titleElement.innerHTML += titleText[index];
              index++;
              setTimeout(appendTitle, 300); // Retraso de 300ms entre letras
          }
      }

      appendTitle();

      clearTimeout(c);
  }, 1000);
};
