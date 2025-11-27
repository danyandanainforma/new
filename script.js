function hitungDiskon() {
    // 1. Ambil nilai dari input HTML
    const hargaAsliInput = document.getElementById('hargaAsli').value;
    const persenDiskonInput = document.getElementById('persenDiskon').value;
    
    // Konversi nilai input (yang berupa string) menjadi angka
    const hargaAsli = parseFloat(hargaAsliInput);
    const persenDiskon = parseFloat(persenDiskonInput);

    // 2. Lakukan Validasi
    if (isNaN(hargaAsli) || isNaN(persenDiskon) || hargaAsli <= 0 || persenDiskon < 0 || persenDiskon > 100) {
        alert("Mohon masukkan Harga Asli yang valid dan Persentase Diskon (0-100%).");
        // Reset hasil tampilan
        document.getElementById('uangHemat').textContent = 'Rp 0';
        document.getElementById('hargaAkhir').textContent = 'Rp 0';
        return; // Hentikan fungsi jika input tidak valid
    }

    // 3. Lakukan Perhitungan
    
    // Rumus Uang yang dihemat: Harga Asli * (Diskon / 100)
    const uangHemat = hargaAsli * (persenDiskon / 100);
    
    // Rumus Harga Akhir: Harga Asli - Uang yang dihemat
    const hargaAkhir = hargaAsli - uangHemat;

    // 4. Tampilkan Hasil
    
    // Fungsi pembantu untuk format mata uang Rupiah
    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(angka);
    };

    document.getElementById('uangHemat').textContent = formatRupiah(uangHemat);
    document.getElementById('hargaAkhir').textContent = formatRupiah(hargaAkhir);
}
