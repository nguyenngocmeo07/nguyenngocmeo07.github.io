const fs = require('fs');

// Define the path to the file you want to read
const filePath = './link2.txt';

// Use the readFile method to read the contents of the file
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Split the data by newline character to create an array of lines
    const lines = data.split('\n');

    const paneltmp =  [
        {
            "img": "https://cf.shopee.vn/file/dcd37b6e9151969c642b1eb5917aec0c_tn",
            "text": "giày M.L.B NY đen, giày thể thao nam nữ [FULLBOX]",
            "link": "https://shope.ee/9zQTZiml0a"
        },
        {
            "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/21af4525-5ca8-4e5e-b8d9-6d230d0d70d49E06804F-5772-43D9-BB7B-6F618123F337.png",
            "text": "Shop giày tui mua",
            "link": "https://shope.ee/9zQTZiml0a"
        },
        {
            "img": "https://cf.shopee.vn/file/77ffc72904094065f68c7fab2bdb0851_tn",
            "text": "DAYPACK ANGEL ( Balo ver 1)",
            "link": "https://shope.ee/1q4lqj8dyC"
        },
        {
            "img": "https://cf.shopee.vn/file/25e0d60268d59c1a07f0cd6535c506db_tn",
            "text": "Mũ len giữ ấm tai mèo thoáng khí thời trang MIHAN1 cho nữ\n",
            "link": "https://shope.ee/6UqbPJdH6m"
        },
        {
            "img": "https://cf.shopee.vn/file/79cbce55c27e5fc089aa452b2644103b",
            "text": "Giày cao gót Erosska thời trang phối dây gót nhọn kiểu dáng xỏ ngón cao 7cm màu trắng _ BM004",
            "link": "https://shope.ee/89ypOP1BdQ"
        },
        {
            "img": "https://i.ecomobi.com/ssp/images/ezy3RCsTaMMz0dP6GkNFAeMRbURwJ9Zah9AInAGh.jpeg",
            "text": "Đèn Cây Đứng Dáng Cao Trang Trí Phòng Khách Phòng Ngủ Phong Cách Bắc Âu - Tặng Kèm Đèn LED [CMART GIA DỤNG TIỆN ÍCH]",
            "link": "https://shope.ee/6fA1bft61o"
        },
        {
            "img": "https://cf.shopee.vn/file/2cb82a1081411c1509d8b683d1098b9d",
            "text": "Bộ Nhả Kem Đánh Răng Tự Động, Kệ Để Đồ Phòng Tắm Cao Cấp",
            "link": "https://shope.ee/3ppqETysAC"
        },
        {
            "img": "https://i.ecomobi.com/ssp/images/uLFV5J8pvebIk9IlWlfzStMVrKN6RfCiNgNQoXI6.jpeg",
            "text": "Ghế sofa lười tatami giường đôi nhỏ căn hộ nhỏ ban công phòng ngủ ghế sofa thư giãn",
            "link": "https://shope.ee/3fWQ2Byxvs"
        },
        {
            "img": "https://cf.shopee.vn/file/67a18c64379b680235b008092407a3bc_tn",
            "text": "Mắt ếch gắn trang trí mũ bảo hiểm, phụ kiện gắn mũ bảo hiểm độc lạ hottrend Soc Store Vietnam",
            "link": "https://shope.ee/AwXrlqA7s"
        },
        {
            "img": "https://cf.shopee.vn/file/b6d1cc0fbfc8b2e99052ac87a1f68783_tn",
            "text": "Mũ bảo hiểm nửa đầu chính hãng Sóc Store Vietnam nhiều màu kèm kính UV, kính phi công, nón bảo hiểm 1 phần 2 freesize",
            "link": "https://shope.ee/2fdsqO2JBQ"
        },
        {
            "img": "https://cf.shopee.vn/file/ed886b15059184c693413fc90a1bf1b9_tn",
            "text": "Balo basic thời trang đi học du lịch dễ thương vải kaki mềm size lớn (KAKI BASIC 45CM)",
            "link": "https://shope.ee/VZOGQ1Hhw"
        },
        {
            "img": "https://cf.shopee.vn/file/66c1419172ee3d5ed7497ac8662e9ebc_tn",
            "text": "Balo nhiều ngăn khoá dọc (NNI BACKPACK 🖤)",
            "link": "https://shope.ee/VZOGQZvs0"
        },
        {
            "img": "https://cf.shopee.vn/file/491f5b76f452154f57647a9b7c4d8f7c_tn",
            "text": "Balo vải oxford mềm form nhỏ tặng kèm móc khoá gấu dễ thương (ZIIM BACKPACK❤️)",
            "link": "https://shope.ee/7f2YncCv7A"
        },
        {
            "img": "https://i.ecomobi.com/ssp/images/elorXsdXcbrRqegN8gkrGywlT1QsXhCEne0IOVEL.jpeg",
            "text": "Shop giày puma",
            "link": "https://shope.ee/7f2YncCv7A"
        },
        {
            "img": "https://i.ecomobi.com/ssp/images/MiX9qkMENOU4rFO2fjVg7nnn5Lcy4X6EH1M983gS.jpeg",
            "text": "Giày thể thao M.L.B đẹp full box",
            "link": "https://shope.ee/7f2YncCv7A"
        },
        {
            "img": "https://cf.shopee.vn/file/0ac9f350f53f6b316a206597998301c0_tn",
            "text": "Túi mini đeo chéo nữ dây xích, túi xách mini size 13-18cm dáng ví nhiều ngăn thời trang dạo phố hàn quốc",
            "link": "https://shope.ee/7f2YncCv7A"
        }
    ]

    const rs = paneltmp.map((item, i) => {
        item.link = lines[i]
        return item
    })

    const jsonData = JSON.stringify(rs);

    // Define the path to the file you want to save
    const filePath = './data.json';

    // Use the writeFile method to save the JSON data into the file
    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('Data saved successfully!');
    });

    // console.log(rs);
});

