class Menu{ 
    kasir1: number; 
    kasir2: number; 
    
    constructor(kasir1:number, kasir2:number){ 
        this.kasir1 = kasir1; 
        this.kasir2 = kasir2; 
    } 
    
    penjumlahan(){ 
        return this.kasir1 + this.kasir2; 
    } 
    pengurangan(){ 
        return this.kasir1 - this.kasir2; 
    } 
    perkalian(){ 
        return this.kasir1 * this.kasir2; 
    } 
    pembagian(){ 
        return this.kasir1 / this.kasir2; 
    } 
} 

let menu = new Menu(8,5); 
console.log(`Hasil penjumlahan = ${menu.penjumlahan()}`); 
console.log(`Hasil pengurangan = ${menu.pengurangan()}`); 
console.log(`Hasil perkalian = ${menu.perkalian()}`); 
console.log(`Hasil pembagian = ${menu.pembagian()}`);