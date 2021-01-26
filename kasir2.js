var Tombol = /** @class */ (function () {
    function Tombol(teks, tipe) {
        if (tipe === void 0) { tipe = "button"; }
        this.tipe = tipe;
        this.teks = teks;
    }
    Tombol.prototype.tampil = function () {
        return "<button type=\"" + this.tipe + "\">" + this.teks + "</button>";
    };
    return Tombol;
}());
var TextBox = /** @class */ (function () {
    function TextBox(tipe) {
        if (tipe === void 0) { tipe = "text"; }
        this.tipe = tipe;
    }
    TextBox.prototype.tampil = function () {
        return "<input type=\"" + this.tipe + "\" />";
    };
    return TextBox;
}());
var submit = new Tombol("TOTAL", "submit");
var reset = new Tombol("BERSIHKAN", "reset");
var search = new Tombol("CARI");
var inputNamabarang = new TextBox();
var jumlah = new TextBox("number");
var total = new TextBox("date");
var app = document.getElementById("app");
app.innerHTML = " \n<h2>Program Aplikasi Kasir</h2> \n<form> \n    Nama barang : " + inputNamabarang.tampil() + " " + search.tampil() + " <br /> \n    Jumlah barang : " + jumlah.tampil() + " <br /> \n    Total : " + total.tampil() + " <br /> \n    " + submit.tampil() + " " + reset.tampil() + " \n    </form> ";
