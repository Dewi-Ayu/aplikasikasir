var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Submit = /** @class */ (function (_super) {
    __extends(Submit, _super);
    function Submit(teks) {
        return _super.call(this, teks, "submit") || this;
    }
    return Submit;
}(Tombol));
var Reset = /** @class */ (function (_super) {
    __extends(Reset, _super);
    function Reset(teks) {
        return _super.call(this, teks, "reset") || this;
    }
    return Reset;
}(Tombol));
var Cari = /** @class */ (function (_super) {
    __extends(Cari, _super);
    function Cari() {
        return _super.call(this, "CARI", "submit") || this;
    }
    return Cari;
}(Tombol));
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
var InputAngka = /** @class */ (function (_super) {
    __extends(InputAngka, _super);
    function InputAngka() {
        return _super.call(this, "number") || this;
    }
    return InputAngka;
}(TextBox));
var InputTanggal = /** @class */ (function (_super) {
    __extends(InputTanggal, _super);
    function InputTanggal() {
        return _super.call(this, "date") || this;
    }
    return InputTanggal;
}(TextBox));
var submit = new Submit("JADWALKAN");
var reset = new Reset("BERSIHKAN");
var search = new Cari();
var inputNama = new TextBox();
var inputJumlahKelas = new InputAngka();
var tanggalMulai = new InputTanggal();
var app = document.getElementById("app");
app.innerHTML = " <h2>Penjadwalan Matakuliah</h2> \n<form> \n    Nama : " + inputNama.tampil() + " " + search.tampil() + " <br /> \n    Jumlah kelas : " + inputJumlahKelas.tampil() + " <br /> \n    Mulai mengajar : " + tanggalMulai.tampil() + " <br /> \n    " + submit.tampil() + " " + reset.tampil() + " \n</form>";
