class Tombol{ 
    tipe: string; 
    teks: string; 
    
    constructor(teks: string, tipe: string = "button"){ 
        this.tipe = tipe; 
        this.teks = teks;
    } 
    tampil(){ 
        return `<button type="${this.tipe}">${this.teks}</button>`; 
    } 
} 
class TextBox{ 
    tipe: string; 
    constructor(tipe: string = "text"){ 
        this.tipe = tipe; 
    } 
    
    tampil(){ 
        return `<input type="${this.tipe}" />`; 
    } 
} 
let submit = new Tombol("TOTAL","submit"); 
let reset = new Tombol("BERSIHKAN", "reset"); 
let search = new Tombol("CARI"); 

let inputNamabarang = new TextBox(); 
let jumlah = new TextBox("number"); 
let total = new TextBox("date"); 

let app = document.getElementById("app"); 

app.innerHTML = ` 
<h2>Program Aplikasi Kasir</h2> 
<form> 
    Nama barang : ${inputNamabarang.tampil()} ${search.tampil()} <br /> 
    Jumlah barang : ${jumlah.tampil()} <br /> 
    Total : ${total.tampil()} <br /> 
    ${submit.tampil()} ${reset.tampil()} 
    </form> `;