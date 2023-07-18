console.log("BMI TEST, HAS BEEN STARTED!") //test apakah javascript sudah berfungsi atau belum

function validateInteger(input) {
    input.value = input.value.replace(/\D/g, ''); // Menghapus karakter non-digit pada input
 }


  

function proses(){ 
    var berat = document.getElementById("berat"); //variabel nilai berat yang diinput
    var nilaiberat = berat.value;

    var tinggi = document.getElementById("tinggi"); //variabel nilai tinggi yang diinput
    var nilaitinggi = tinggi.value;
    nilaitinggi = nilaitinggi / 100;

    var hasil = nilaiberat / (nilaitinggi * nilaitinggi); //operasi perhitunggan BMI 
    hasil = hasil.toFixed(2);
    console.log(hasil);


    var result = document.getElementById("nilai");
    result.innerHTML = hasil; //menampilkan hasil kedalam id result HTML

    var keterangan = document.getElementById("keterangan"); //variabel keterangan pada HTML
    var keterangan2 = document.getElementById("keterangan2"); //variabel keterangan2 pada HTML
    

    if(hasil < 18.5){
        keterangan.innerHTML = "BMI di bawah 18.5: Berat badan kurang (underweight)"; //menampilkan pesan jika bmmi < 18.5
        keterangan2 = " ";
    }else if(hasil > 18.5 && hasil < 24.9){
        keterangan.innerHTML = "BMI antara 18.5 dan 24.9: Berat badan normal (normal weight)"; //menampilkan pesan jika bmi diantara nilai yang ditentukan
        keterangan2 = " ";
    }else if(hasil > 24.9 && hasil < 29.9){
        keterangan2 = " ";
        keterangan.innerHTML = "BMI antara 25 dan 29.9: Kelebihan berat badan (overweight)"; //menampikan pesan jika bmi diantara nilai yang ditentukan
    }else if(hasil >= 30){
        keterangan.innerHTML = "BMI 30 atau lebih: Obesitas"; //menampilkan pesan jika bmi lebih dari 30
        keterangan2 = " ";
    }else{
        result.innerHTML = " "; //menampilkan pesan jika input belum dimasukkan tetapi sudah mulai klik hitung
        keterangan.innerHTML = "Masukan nilai dulu!";
        keterangan2.innerHTML = "<br> Nilai tidak dapat diproses disebabkan oleh kesalahan input data maupun nilai yang belum diisi pada kolom input." ;
    }
}

function reset (){ //fungsi tombol reseit

    var result = document.getElementById("nilai");
    result.innerHTML = 0; //mengambalikan result kembali ke 0

    var keterangan = document.getElementById("keterangan");
    keterangan.innerHTML = "masukan nilai." //menampilkan pesan untuk masukan nilai

    var keterangan2 = document.getElementById("keterangan2");
    keterangan2.innerHTML = ""; //mengosongkan id keterangan2
    

    var berat = document.getElementById("berat");
    berat.value = ""; //mengosongkan nilai input berat

    var tinggi = document.getElementById("tinggi");
    tinggi.value = ""; //mengosongkan nilai input tinggi

    var umur = document.getElementById("umur");
    umur.value = ""; //mengosongkan nilai input umur
}
  