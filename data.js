const IMG = 'https://picsum.photos/seed';

const appData = {
    products: [
        { id: 1, name: 'Chau Trong Cay Gom Cao Cap', description: 'Chau gom tu nhien, thoang khi, kich thuoc 20cm', price: 250000, icon: '', category: 'Chau & Dat', image: IMG + '/chau1/400/300', detailed: 'Chau gom 100% tu nhien, khong chua chat doc hai. Thoang khi tot, giup cay phat trien khoe manh.' },
        { id: 2, name: 'Dat Trong Cay Organic', description: 'Dat huu co cao cap, giau duong chat cho cay xanh', price: 150000, icon: '', category: 'Chau & Dat', image: IMG + '/dat1/400/300', detailed: 'Dat duoc che bien tu nguyen lieu tu nhien, khong hoa chat. Chua day du duong chat cho cay.' },
        { id: 3, name: 'Bo Dung Cu Cham Soc', description: 'Gom: tuoi nuoc, nho co, xoi dat, tia canh', price: 320000, icon: '', category: 'Dung Cu', image: IMG + '/dungcu1/400/300', detailed: 'Bo 4 dung cu chuyen dung, chat lieu thep khong gi, tay cam ergonomic.' },
        { id: 4, name: 'Phan Bon Long NPK', description: 'Phan bon can bang, tang sinh luong cay', price: 120000, icon: '', category: 'Phan Bon', image: IMG + '/phanbon1/400/300', detailed: 'Phan bon long NPK de hap thu, tac dung nhanh, an toan cho gia dinh.' },
        { id: 5, name: 'Binh Tuoi Cay Hien Dai', description: 'Binh tuoi 2L, co tay cam, de su dung', price: 180000, icon: '', category: 'Dung Cu', image: IMG + '/binhtuoi1/400/300', detailed: 'Binh tuoi dung tich 2L, thiet ke hien dai, voi tuoi min.' },
        { id: 6, name: 'Ke Trung Bay Go', description: 'Ke go soi 3 tang, chiu luc tot', price: 450000, icon: '', category: 'Ke & Gia Do', image: IMG + '/ke1/400/300', detailed: 'Ke go soi tu nhien 3 tang, chiu luc 50kg/tang, phu hop trang tri.' },
        { id: 7, name: 'Phun Suong Tuoi La', description: 'Phun suong 500ml, tinh te cho la cay', price: 95000, icon: '', category: 'Dung Cu', image: IMG + '/phunsuong1/400/300', detailed: 'Phun suong 500ml, tao suong min, de su dung, tiet kiem nuoc.' },
        { id: 8, name: 'Che Pham Diet Sau Huu Co', description: 'Diet sau tu nhien, an toan cho gia dinh', price: 110000, icon: '', category: 'Duoc Pham', image: IMG + '/thuoc1/400/300', detailed: 'Che pham tu nguyen lieu tu nhien, hieu qua cao, an toan voi moi truong.' },
        { id: 9, name: 'Gia Do Cay Leo', description: 'Gia do kim loai chong ri, cao 1.5m', price: 210000, icon: '', category: 'Ke & Gia Do', image: IMG + '/giado1/400/300', detailed: 'Gia do bang kim loai son tinh dien, chong ri, phu hop cay leo ban cong.' },
        { id: 10, name: 'Chau Treo Tuong', description: 'Chau nhua cao cap, co lo thoai nuoc', price: 85000, icon: '', category: 'Chau & Dat', image: IMG + '/chau2/400/300', detailed: 'Chau treo tuong nhua cung, co lo thoai nuoc, mau sac trang nha.' },
        { id: 11, name: 'Bo Kich Thich Ra Re', description: 'Kich thich ra re nhanh, tang ti le song', price: 75000, icon: '', category: 'Duoc Pham', image: IMG + '/kichthich1/400/300', detailed: 'Dung dich kich thich ra re, tang ti le song cho cay moi giam.' },
        { id: 12, name: 'Gang Tay Lam Vuon', description: 'Gang tay cao su chong tham, size M', price: 55000, icon: '', category: 'Dung Cu', image: IMG + '/gangtay1/400/300', detailed: 'Gang tay cao su tu nhien, chong tham, bao ve tay khi lam vuon.' },
        { id: 13, name: 'Phan Trun Que Nguyen Chat', description: 'Phan huu co tu trun que, 2kg', price: 90000, icon: '', category: 'Phan Bon', image: IMG + '/trunque1/400/300', detailed: 'Phan trun que nguyen chat, giau dinh duong, cai tao dat.' },
        { id: 14, name: 'Chau Nhua Thong Minh', description: 'Chau nhua 25cm, co ngan chua nuoc', price: 135000, icon: '', category: 'Chau & Dat', image: IMG + '/chau3/400/300', detailed: 'Chau nhua thong minh co ngan chua nuoc du tru, giup cay khong bi ung.' },
        { id: 15, name: 'Keo Cat Canh Chuyen Dung', description: 'Keo cat canh luoi thep, tay cam boc cao su', price: 160000, icon: '', category: 'Dung Cu', image: IMG + '/keo1/400/300', detailed: 'Keo cat canh luoi thep khong gi, tay cam boc cao su chong truot.' },
        { id: 16, name: 'Den LED Trong Cay', description: 'Den LED quang pho day du 10W', price: 290000, icon: '', category: 'Dung Cu', image: IMG + '/den1/400/300', detailed: 'Den LED trong cay quang pho day du, tiet kiem dien, phu hop cay trong nha.' },
        { id: 17, name: 'Binh Tuoi Nho Giot', description: 'Bo tuoi nho giot 10 dau, tu dong', price: 380000, icon: '', category: 'Dung Cu', image: IMG + '/nhogiot1/400/300', detailed: 'He thong tuoi nho giot gom 10 dau tuoi, hen gio tu dong.' },
        { id: 18, name: 'Gia Do Cay Mini', description: 'Gia do go mini 2 tang, de ban', price: 190000, icon: '', category: 'Ke & Gia Do', image: IMG + '/giado2/400/300', detailed: 'Gia do go mini 2 tang, thiet ke nho gon de ban lam viec.' },
        { id: 19, name: 'Soi Trang Tri', description: 'Soi tu nhien cac mau, 500g', price: 45000, icon: '', category: 'Chau & Dat', image: IMG + '/soi1/400/300', detailed: 'Soi tu nhien nhieu mau sac, dung de trang tri chau cay.' },
        { id: 20, name: 'Thuoc Tru Nam Huu Co', description: 'Tru nam tu nhien, an toan cho cay', price: 125000, icon: '', category: 'Duoc Pham', image: IMG + '/thuoc2/400/300', detailed: 'Che pham tru nam huu co, phong va tri benh phan trang, thoi re.' },
        { id: 21, name: 'Binh Tuoi Cao Cap', description: 'Binh tuoi 5L bang nhua PVC cao cap', price: 210000, icon: '', category: 'Dung Cu', image: IMG + '/binhtuoi2/400/300', detailed: 'Binh tuoi dung tich 5L, chat lieu nhua PVC cao cap, ben dep.' },
        { id: 22, name: 'Chau Cay Canh Mini', description: 'Chau gom mini 10cm, phu hop ban lam viec', price: 65000, icon: '', category: 'Chau & Dat', image: IMG + '/chau4/400/300', detailed: 'Chau gom mini size 10cm, phu hop de ban lam viec hoac ke sach.' },
        { id: 23, name: 'Mang Phu Goi Hat Giong', description: 'Mang phu giup hat nhanh nay mam', price: 35000, icon: '', category: 'Duoc Pham', image: IMG + '/mang1/400/300', detailed: 'Mang phu goi hat giong, giu am tot, giup hat nay mam nhanh.' },
        { id: 24, name: 'Ban Lam Vuon Da Nang', description: 'Ban lam vuon da nang, gap gon, chiu luc', price: 520000, icon: '', category: 'Dung Cu', image: IMG + '/ban1/400/300', detailed: 'Ban lam vuon da nang co the gap gon, chiu luc toi da 80kg.' },
        { id: 25, name: 'Ong Nuoc Nho Giot', description: 'Ong nuoc nho giot 10m, co van diem chinh', price: 120000, icon: '', category: 'Dung Cu', image: IMG + '/ong1/400/300', detailed: 'Ong nuoc nho giot dai 10m, co van diem chinh luong nuoc.' },
        { id: 26, name: 'Phan Bon La Huu Co', description: 'Phan bon la dam cao, kich thich cay ra hoa', price: 85000, icon: '', category: 'Phan Bon', image: IMG + '/phanla1/400/300', detailed: 'Phan bon la ham luong dam cao, kich thich cay phat trien la va ra hoa.' },
        { id: 27, name: 'Gia Do Cay Leo Ban Cong', description: 'Gia do sat ma 3 tang, chong ri', price: 280000, icon: '', category: 'Ke & Gia Do', image: IMG + '/giado3/400/300', detailed: 'Gia do sat ma 3 tang, phu hop cho ban cong nho.' },
        { id: 28, name: 'Phun Suong Tu Dong', description: 'Binh phun suong dien tu, hen gio tu dong', price: 420000, icon: '', category: 'Dung Cu', image: IMG + '/phunsuong2/400/300', detailed: 'Binh phun suong dien tu co hen gio, phun suong tu dong theo chu ky.' },
        { id: 29, name: 'Xeng Lam Vuon Nho', description: 'Xeng lam vuon bang thep khong gi, tay cam go', price: 78000, icon: '', category: 'Dung Cu', image: IMG + '/xeng1/400/300', detailed: 'Xeng lam vuon bang thep khong gi, tay cam go tu nhien, chong truot.' },
        { id: 30, name: 'Phan Bon Hoa Hong', description: 'Phan bon chuyen dung cho hoa hong, 1kg', price: 115000, icon: '', category: 'Phan Bon', image: IMG + '/phanhoahong1/400/300', detailed: 'Phan bon chuyen dung cho hoa hong, giau kali va vi luong, hoa to dep.' }
    ],

    users: [
        { id: 1, name: 'Nguyen Van A', email: 'demo@gmail.com', phone: '0912345678', password: '123456', createdAt: '15/07/2024 10:30' },
        { id: 2, name: 'Tran Thi B', email: 'demo2@gmail.com', phone: '0987654321', password: '123456', createdAt: '14/07/2024 09:15' }
    ],

    orders: [
        { id: 1001, userId: 1, items: [{ id: 1, name: 'Chau Trong Cay Gom Cao Cap', price: 250000, quantity: 2, icon: '' }, { id: 2, name: 'Dat Trong Cay Organic', price: 150000, quantity: 1, icon: '' }], total: 650000, createdAt: '10/07/2024 14:20', status: 'Da giao' },
        { id: 1002, userId: 1, items: [{ id: 3, name: 'Bo Dung Cu Cham Soc', price: 320000, quantity: 1, icon: '' }], total: 350000, createdAt: '12/07/2024 16:45', status: 'Cho xac nhan' }
    ],

    messages: [
        { id: 1, name: 'Le Van C', email: 'contact1@gmail.com', subject: 'Hoi ve che do bao hanh', message: 'Toi muon biet san pham bao hanh trong bao lau?', createdAt: '13/07/2024 11:30' }
    ]
};

function initializeDemoData() {
    if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify(appData.users));
    if (!localStorage.getItem('orders')) localStorage.setItem('orders', JSON.stringify(appData.orders));
    if (!localStorage.getItem('contacts')) localStorage.setItem('contacts', JSON.stringify(appData.messages));
}
initializeDemoData();
