const pix = "bce23200-89bc-42e8-b15c-62914cfdaa9c";
export function copiar() {
  navigator.clipboard
    .writeText(pix)
    .catch((err) => console.error("Erro ao copiar:", err));
}



