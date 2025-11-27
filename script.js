function hitungCashback() {
    // 1. Ambil nilai dari input HTML
    const hargaAsliInput = document.getElementById('hargaAsli').value;
    const statusPartner = document.getElementById('statusPartner').value;
    const kategoriProduk = document.getElementById('kategoriProduk').value;
    
    const hargaAsli = parseFloat(hargaAsliInput);
    let persenCashback = 0; // Default cashback 0%

    // 2. Validasi Awal
    if (isNaN(hargaAsli) || hargaAsli <= 0) {
        alert("Mohon masukkan Total Belanja yang valid (lebih dari Rp 0).");
        // Reset tampilan
        document.getElementById('persenCashback').textContent = '0%';
        document.getElementById('nilaiCashback').textContent = 'Rp 0';
        document.getElementById('hargaAkhir').textContent = 'Rp 0';
        return; 
    }

    // 3. Cek Syarat Utama (MEMBER/BNI & Kategori Produk)
    if (statusPartner === 'ya' && kategoriProduk === 'furniture') {
        // Syarat terpenuhi, lanjutkan ke logika bertingkat
        
        if (hargaAsli >= 115000000) {
            persenCashback = 15;
        } else if (hargaAsli >= 90000000) {
            persenCashback = 12;
        } else if (hargaAsli >= 60000000) {
            persenCashback = 10;
        } else if (hargaAsli >= 35000000) {
            persenCashback = 8;
        } else if (hargaAsli >= 18000000) {
            persenCashback = 5;
        } else {
            // Cashback 3% TANPA MINIMAL BELANJA (jika syarat utama terpenuhi)
            persenCashback = 3;
        }
        
    } else {
        // Jika salah satu syarat utama (status atau kategori) tidak terpenuhi, cashback tetap 0%
        persenCashback = 0;
    }

    // 4. Lakukan Perhitungan Cashback
    
    // Rumus Nilai Cashback: Total Belanja * (Persen Cashback / 100)
    const nilaiCashback = hargaAsli * (persenCashback / 100);
    
    // Rumus Harga Akhir: Total Belanja - Nilai Cashback (untuk simulasi pembayaran)
    const hargaAkhir = hargaAsli - nilaiCashback;

    // 5. Tampilkan Hasil (dengan format Rupiah)
    
    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(angka);
    };

    document.getElementById('persenCashback').textContent = `${persenCashback}%`;
    document.getElementById('nilaiCashback').textContent = formatRupiah(nilaiCashback);
    document.getElementById('hargaAkhir').textContent = formatRupiah(hargaAkhir);
}
