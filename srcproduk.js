    var nama, harga, kondisi, kategori, kelamin, status
    const tambahProduk=()=>{
        nama = document.getElementById('name').value
        harga = document.getElementById('price').value
        if(document.getElementsByName('condition')[0].checked){
            kondisi = document.getElementsByName('condition')[0].value
        }else{
            kondisi = document.getElementsByName('condition')[1].value
        }
        kategori = document.getElementById('category').value
        produk = [nama, harga, kondisi, kategori]
        var isiTabel = '<tr>'
        for(i=0;i<produk.length;i++){
            isiTabel += '<td>' + produk[i] + '</td>'
            if(i==produk.length-1){
                    isiTabel += '</tr>'
                }
        }
        // isiTabel += `<tr><td>${nama}</td><td>${harga}</td><td>${kondisi}</td><td>${kategori}</td></tr>`          
        document.getElementById('product').innerHTML +=  isiTabel
    }

    const tambahHewan=()=>{
        nama = document.getElementById('nameH').value
        harga = document.getElementById('priceH').value

        if(document.getElementsByName('sex')[0].checked){
            kelamin = document.getElementsByName('sex')[0].value
        }else{
            kelamin = document.getElementsByName('sex')[1].value
        }

        if(document.getElementsByName('stat')[0].checked){
            status = document.getElementsByName('stat')[0].value
        }else{
            status = document.getElementsByName('stat')[1].value
        }

        produk = [nama, harga, kelamin, status]
        var isiTabel = '<tr>'
        for(i=0;i<produk.length;i++){
            isiTabel += '<td>' + produk[i] + '</td>'
            if(i==produk.length-1){
                    isiTabel += '</tr>'
                }
        }       
        document.getElementById('animal').innerHTML +=  isiTabel
    }