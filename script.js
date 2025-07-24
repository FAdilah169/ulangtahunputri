// script.js
import { db, ref, push } from "./firebase.js";

const form = document.getElementById("form");
const namaInput = document.getElementById("nama");
const pesanInput = document.getElementById("pesan");
const thanks = document.getElementById("thanks");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = namaInput.value.trim();
  const pesan = pesanInput.value.trim();

  if (nama && pesan) {
    push(ref(db, "pesan"), {
      nama,
      pesan,
      waktu: Date.now()
    }).then(() => {
      form.style.display = "none";
      thanks.style.display = "block";
    });
  }
});
