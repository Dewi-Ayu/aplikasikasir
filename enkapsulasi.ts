export class Kasir{ 
    protected nama: string; 
    private password: string; 
    private _tanggalmasuk: Date; 
    
    constructor(nama: string, password: string){ 
        this.nama = nama; 
        this.password = password; 
    } 
    
    set tanggalmasuk(tanggal: string){ 
        let tanggalSekarang = new Date(); 
        let tanggalmasuk = new Date(tanggal);
        
        // Jika tanggal masuk tidak valid, 
        // gunakan tanggal masuk default 
        if(tanggalmasuk < tanggalSekarang) 
        this._tanggalmasuk = tanggalmasuk; 
        else 
        this._tanggalmasuk= new Date("2021-01-01"); 
    } 
    
    get tanggalmasuk(){
        const BULAN = [ 
            "Januari", "Februari", "Maret", "April", 
            "Mei", "Juni", "Juli", "Agustus", 
            "September", "Oktober", "November","Desember" 
        ]; 
        let tanggal = this._tanggalmasuk.getDate(); 
        let bulan = BULAN[this._tanggalmasuk.getMonth()]; 
        let tahun = this._tanggalmasuk.getFullYear(); 
        
        return `${tanggal} ${bulan} ${tahun}`; 
    } 
    private user(){ 
        let tahunSekarang = new Date().getFullYear(); 
        let tahunLahir = this._tanggalmasuk.getFullYear(); 
        return tahunSekarang - tahunLahir; } 
        
    protected panggilan(){ 
        if(this.user() > 25) 
        return this.password == "L" ? "Pak" : "Bu"; 
        else 
        return this.password == "L" ? "Mas" : "Mbak"; 
    } 
    
    public Masuk(){ console.log(`${this.panggilan()} ${this.nama} sedang masuk`); 
} 

public Keluar(){ console.log(`${this.panggilan()} ${this.nama} sedang keluar`); 
} 
}