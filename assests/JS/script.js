document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nombreInput = document.querySelector('input[name="nombre"]');
  const precioInput = document.querySelector('input[name="precio"]');
  const imagenInput = document.querySelector('input[name="imagen"]');
  const galeria = document.querySelector(".galeria");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const precio = parseFloat(precioInput.value);
    const imagen = imagenInput.files[0];

    if (!nombre || isNaN(precio) || precio <= 0 || !imagen) {
      alert("Por favor, complete todos los campos correctamente.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "Card Image";
      img.style.maxWidth = "200px";
      img.style.maxHeight = "200px";
      img.style.borderRadius = "8px";

      const title = document.createElement("h2");
      title.classList.add("card-title");
      title.textContent = nombre;

      const description = document.createElement("p");
      description.classList.add("card-description");
      description.textContent = `US$${precio.toFixed(2)}`;

      const eliminarImg = document.createElement("img");
      eliminarImg.src = "/assests/IMG/borrar.png";
      eliminarImg.alt = "Icono para eliminar";
      eliminarImg.classList.add("eliminar");

      eliminarImg.addEventListener("click", () => {
        galeria.removeChild(card);
      });

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(eliminarImg);

      galeria.appendChild(card);

      form.reset();
    };

    reader.readAsDataURL(imagen);
  });
});
