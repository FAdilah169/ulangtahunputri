// read.js
import { db, ref, onValue, remove } from "./firebase.js";


const pesanList = document.getElementById("pesanList");
const pesanRef = ref(db, "pesan");


onValue(pesanRef, (snapshot) => {
  pesanList.innerHTML = "";
  if (snapshot.exists()) {
    const data = snapshot.val();
    const keys = Object.keys(data).reverse(); // pesan terbaru di atas

    keys.forEach((key) => {
      const { nama, pesan } = data[key];
      const div = document.createElement("div");
      div.className = "pesan-box";
      div.innerHTML = `
        <p><strong>${nama}:</strong></p>
        <p>${pesan}</p>
        ${isAdmin ? `<button onclick="hapusPesan('${key}')">🗑 Hapus</button>` : ""}
      `;
      pesanList.appendChild(div);
    });
  } else {
    pesanList.innerHTML = "Belum ada pesan 🥺";
  }
});

// agar tombol hapus bisa digunakan
window.hapusPesan = function (key) {
  if (confirm("Yakin ingin menghapus pesan ini?")) {
    remove(ref(db, `pesan/${key}`));
  }
};
