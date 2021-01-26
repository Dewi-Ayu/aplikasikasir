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

class Submit extends Tombol{ 
    constructor(teks: string){ 
        super(teks, "submit"); 
    } 
} 

class Reset extends Tombol{ 
    constructor(teks: string){ 
        super(teks, "reset"); 
    } 
} 

class Cari extends Tombol{ 
    constructor(){ 
        super("CARI", "submit"); 
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

class InputAngka extends TextBox { 
    constructor(){ 
        super("number"); 
    } 
} 

class InputTanggal extends TextBox { 
    constructor(){ 
        super("date"); 
    } 
} 
let submit = new Submit("JADWALKAN"); 
let reset = new Reset("BERSIHKAN"); 
let search = new Cari(); 

let inputNama = new TextBox(); 
let inputJumlahKelas = new InputAngka(); 
let tanggalMulai = new InputTanggal(); 

let app = document.getElementById("app"); 
app.innerHTML = ` <h2>Penjadwalan Matakuliah</h2> 
<form> 
    Nama : ${inputNama.tampil()} ${search.tampil()} <br /> 
    Jumlah kelas : ${inputJumlahKelas.tampil()} <br /> 
    Mulai mengajar : ${tanggalMulai.tampil()} <br /> 
    ${submit.tampil()} ${reset.tampil()} 
</form>`;