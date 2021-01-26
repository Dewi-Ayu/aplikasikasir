class kasir{ 
    logo: string; 
    pencarian: string;
    login: string;
        
    menampilkan(){ 
        console.log(`${this.logo} sedang menampilkan`); 
    }
    
    cari(){ 
        console.log(`${this.pencarian} sedang mencari`); 
    } 
} 

let kasir1 = new kasir(); 
let kasir2 = new kasir(); 

kasir1.logo = "Pengguna"; 
kasir2.logo = "User"; 

kasir1.menampilkan(); 
kasir1.cari(); 

kasir2.menampilkan(); 
kasir2.cari();