var Menu = /** @class */ (function () {
    function Menu(kasir1, kasir2) {
        this.kasir1 = kasir1;
        this.kasir2 = kasir2;
    }
    Menu.prototype.penjumlahan = function () {
        return this.kasir1 + this.kasir2;
    };
    Menu.prototype.pengurangan = function () {
        return this.kasir1 - this.kasir2;
    };
    Menu.prototype.perkalian = function () {
        return this.kasir1 * this.kasir2;
    };
    Menu.prototype.pembagian = function () {
        return this.kasir1 / this.kasir2;
    };
    return Menu;
}());
var menu = new Menu(8, 5);
console.log("Hasil penjumlahan = " + menu.penjumlahan());
console.log("Hasil pengurangan = " + menu.pengurangan());
console.log("Hasil perkalian = " + menu.perkalian());
console.log("Hasil pembagian = " + menu.pembagian());
