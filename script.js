function hitungPenjumlahan() {
    var angka1 = parseFloat(document.getElementById("number1").value);
    var angka2 = parseFloat(document.getElementById("number2").value);
    var hasil = angka1 + angka2;

    if (!isNaN(hasil)) {
        document.getElementById("hasil").innerText = "Hasil Penjumlahan: " + hasil;
    } else {
        document.getElementById("hasil").innerText = "Mohon isi kedua input dengan angka.";
    }
}
