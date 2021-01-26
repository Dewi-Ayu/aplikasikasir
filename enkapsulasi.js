"use strict";
exports.__esModule = true;
exports.Kasir = void 0;
var Kasir = /** @class */ (function () {
    function Kasir(nama, password) {
        this.nama = nama;
        this.password = password;
    }
    Object.defineProperty(Kasir.prototype, "tanggalmasuk", {
        get: function () {
            var BULAN = [
                "Januari", "Februari", "Maret", "April",
                "Mei", "Juni", "Juli", "Agustus",
                "September", "Oktober", "November", "Desember"
            ];
            var tanggal = this._tanggalmasuk.getDate();
            var bulan = BULAN[this._tanggalmasuk.getMonth()];
            var tahun = this._tanggalmasuk.getFullYear();
            return tanggal + " " + bulan + " " + tahun;
        },
        set: function (tanggal) {
            var tanggalSekarang = new Date();
            var tanggalmasuk = new Date(tanggal);
            // Jika tanggal masuk tidak valid, 
            // gunakan tanggal masuk default 
            if (tanggalmasuk < tanggalSekarang)
                this._tanggalmasuk = tanggalmasuk;
            else
                this._tanggalmasuk = new Date("2021-01-01");
        },
        enumerable: false,
        configurable: true
    });
    Kasir.prototype.user = function () {
        var tahunSekarang = new Date().getFullYear();
        var tahunLahir = this._tanggalmasuk.getFullYear();
        return tahunSekarang - tahunLahir;
    };
    Kasir.prototype.panggilan = function () {
        if (this.user() > 25)
            return this.password == "L" ? "Pak" : "Bu";
        else
            return this.password == "L" ? "Mas" : "Mbak";
    };
    Kasir.prototype.Masuk = function () {
        console.log(this.panggilan() + " " + this.nama + " sedang masuk");
    };
    Kasir.prototype.Keluar = function () {
        console.log(this.panggilan() + " " + this.nama + " sedang keluar");
    };
    return Kasir;
}());
exports.Kasir = Kasir;
