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
var submit = new Tombol("JADWALKAN", "submit");
var reset = new Tombol("BERSIHKAN", "reset");
var search = new Tombol("CARI");
var inputNama = new TextBox();
var inputJumlahKelas = new TextBox("number");
var tanggalMulai = new TextBox("date");
var app = document.getElementById("app");
app.innerHTML = " \n<h2>Penjadwalan Matakuliah</h2> \n<form> \n    Nama : " + inputNama.tampil() + " " + search.tampil() + " <br /> \n    Jumlah kelas : " + inputJumlahKelas.tampil() + " <br /> \n    Mulai mengajar : " + tanggalMulai.tampil() + " <br /> \n    " + submit.tampil() + " " + reset.tampil() + " \n    </form> ";
