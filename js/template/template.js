export var template = {};

template.header = `<div id="header">
    <div id="headerdot">
        <div class="socialnetwork">
            <a href=""> Facebook Chính Thức </a>
            <a href=""> Twitter Chính Thức </a>
            <a href=""> Hỗ trợ </a>
        </div>
        <div class="maindot">
            <a class="rdr" href="/">
                <div id="logoshop">
                    <img src="https://i.imgur.com/TwJyLV7.png" width="100%" />
                </div>
            </a>
            <div id="searchitem">
                <input id="searchbot" type="text" placeholder="Tìm kiếm sản phẩm/tập phim..." />
                <button id="searchbtn">Tìm</button>
            </div>
        </div>
    </div>
</div>
<div class="mainshop"></div>`;

template.home = `<div id="home">
<div id="menulist">
    <h4 style="color:#3399ff"> DANH MỤC HÀNG ĐẦU </h4>
    <a href="">
        <div id="linkref" style="font-weight:bold;color:purple">Bộ nhớ phim Doraemon</div>
    </a>
    <a href="">
        <div id="linkref">Web xem Doraemon Miễn Phí</div>
    </a>
    <a href="">
        <div id="linkref">Website Raw</div>
    </a>
</div>
<div id="shopitem">
    <h4 style="color:blue;padding:20px 10px" id="MAIN_TITLE"> BẠN MUỐN LƯU TRỮ HẾT TẤT CẢ PHIM CHẤT LƯỢNG CAO? VUI LÒNG DONATE </h4>
    <div class="dataApp"></div>
    <div class="loading--wrap">
        <div class="svg-loader">
            <svg class="svg-container" height="40" width="40" viewBox="0 0 100 100">
                <circle class="loader-svg bg" cx="50" cy="50" r="45"></circle>
                <circle class="loader-svg animate" cx="50" cy="50" r="45"></circle>
            </svg>
        </div>
    </div>
</div></div>`;

template.item = `<div id="items">
<div id="itemking">
    <img src="" class="__item__image" width="100%" />
</div>
<div id="orderitem">
    <h2 style="color:black;padding:20px 10px" class="__item__title"></h2>
    <span id="price" style="font-size:26px" class="__item__price"></span>

    <p id="textorder" class="__item__description"></p>
    <button id="payment" type="submit"> MUA NGAY </button><button id="payment2" type="submit"> ĐĂNG KÝ DÙNG THỬ </button>
    <h4 style="color:black;padding:20px 10px"> Sản phẩm có cùng danh mục </h4>
    <div class="otherProduct">
        <div id="boxpre">
            <img src="https://i.imgur.com/LCKMIR4.jpg" width="100%" />
            <a href="">
                <p id="cost">[TERABOX] Kho Phim Doraemon Vietsub M1 - Vĩnh Viễn</p>
            </a><br><span id="price">220.000đ</span>
        </div>
        <div id="boxpre">
            <img src="https://i.imgur.com/yKdXvx7.jpg" width="100%" />
            <a href="">
                <p id="cost">[Google Drive] Kho 25 Movie Cũ Bản Đẹp 1080p - Vĩnh Viễn</p>
            </a><br><span id="price">150.000đ</span>
        </div>
        <div id="boxpre">
            <img src="https://i.imgur.com/fPTCrdK.jpg" width="100%" />
            <a href="">
                <p id="cost">[Google Drive] COMBO M2 + 1979 Vietsub - Vĩnh Viễn</p>
            </a><br><span id="price">550.000đ</span>
        </div>
        <div id="boxpre">
            <img src="https://i.imgur.com/a4lhtap.jpg" width="100%" />
            <a href="">
                <p id="cost">[Google Drive] Doraemon 1979 Full Bản Đẹp - Vĩnh Viễn</p>
            </a><br><span id="price">330.000đ</span>
        </div>
    </div>
</div></div>`;

template.notfound = `<div class="NotFound">
                <h1>\\(^Д^)/</h1>
                <p>Không tìm thấy trang</p>
            </div>`;