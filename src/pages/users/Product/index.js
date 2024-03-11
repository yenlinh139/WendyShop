import React, { Component } from "react";
import { memo } from "react";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "react-medium-image-zoom/dist/styles.css";
import { formaster } from "utils/formater";
import "./style.scss";
import { Link } from "react-router-dom";
import product1Img from "assets/users/images/featured/4.png";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isHovered: false,
      currentTab: 1,
    };
  }

  handleTabClick = (tabNumber) => {
    this.setState({ currentTab: tabNumber });
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { currentTab } = this.state;

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div
                className="product-zoom-container"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              >
                <img
                  className={this.state.isHovered ? "zoomed-in" : ""}
                  src={product1Img}
                  alt="Product"
                />
              </div>
            </div>
            <div className="col-7">
              <div className="detailProduct">
                <div>
                  <h3>Ghế lười cho ban công/ phòng ngủ độc đáo</h3>
                  <ul>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiOutlineStar />
                    </li>
                    <li>
                      <AiOutlineStar />
                    </li>
                    <li>
                      <h6>(24 đánh giá)</h6>
                    </li>
                  </ul>
                  <h5>
                    <span>{formaster("409000")}</span>
                    {formaster("327999")}
                  </h5>
                </div>

                <div className="detailProduct-item">
                  <div className="col-2">
                    <h6>
                      Mã Giảm Giá <br /> Của Shop
                    </h6>
                  </div>
                  <div className="d-flex">
                    <div className="detailProduct-discount">Giảm 10k</div>
                    <div className="detailProduct-discount">Giảm 25k</div>
                  </div>
                </div>
                <div className="detailProduct-item">
                  <div className="col-2">
                    <h6>
                      Chính Sách <br /> Trả Hàng
                    </h6>
                  </div>
                  <p>Trả hàng 15 ngày</p>
                </div>
                <div className="detailProduct-item">
                  <div className="col-2">
                    <h6>Variation</h6>
                  </div>
                  <div className="detailProduct-Variation">
                    <ul>
                      <li>
                        <Link to={""}>Xám đậm</Link>
                      </li>
                      <li>
                        <Link to={""}>Xám nhạt</Link>
                      </li>
                      <li>
                        <Link to={""}>Trắng</Link>
                      </li>
                      <li>
                        <Link to={""}>Màu be</Link>
                      </li>
                      <li>
                        <Link to={""}>Xanh bơ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detailProduct-item">
                  <did className="col-2">
                    <h6>Số lượng</h6>
                  </did>
                  <div className="detailProduct-crement">
                    <button onClick={this.decrement}>-</button>
                    <p>{this.state.count}</p>
                    <button onClick={this.increment}>+</button>
                    <h5>60 sản phẩm có sẵn</h5>
                  </div>
                </div>
                <div className="detailProduct-item">
                  <button className="detailProduct-cart">
                    <AiOutlineShoppingCart /> &nbsp; &nbsp;Thêm vào giỏ hàng
                  </button>
                  <button className="detailProduct-shopping">Mua ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* Các nút tab */}
          <div className="decription-tab">
            <button
              onClick={() => this.handleTabClick(1)}
              className={currentTab === 1 ? "active" : ""}
            >
              CHI TIẾT SẢN PHẨM
            </button>
            <button
              onClick={() => this.handleTabClick(2)}
              className={currentTab === 2 ? "active" : ""}
            >
              MÔ TẢ SẢN PHẨM
            </button>
            <button
              onClick={() => this.handleTabClick(3)}
              className={currentTab === 3 ? "active" : ""}
            >
              Nhận xét (1)
            </button>
          </div>

          {/* Phần nội dung của tab */}
          {currentTab === 1 && (
            <div id="decription">
              <div className="decription-item">
                <div className="col-3">
                  <h6>Hạn bảo hành</h6>
                </div>
                <p>12 tháng</p>
              </div>
              <div className="decription-item">
                <div className="col-3">
                  <h6>Loại bảo hành</h6>
                </div>
                <p>Bảo hành nhà cung cấp</p>
              </div>
              <div className="decription-item">
                <div className="col-3">
                  <h6>Bọc vả</h6>
                </div>

                <p>Cotton, Twill</p>
              </div>
              <div className="decription-item">
                <div className="col-3">
                  <h6>Nội thất gấp lại</h6>
                </div>
                <p>Không</p>
              </div>
              <div className="decription-item">
                <div className="col-3">
                  <h6>Xuất xứ</h6>
                </div>
                <p>Việt Nam</p>
              </div>
              <div className="decription-item">
                <div className="col-3">
                  <h6>Số lượng hàng khuyến mãi</h6>
                </div>
                <p>130</p>
              </div>
              <div className="decription-item">
                <div className="col-3">
                  <h6>Kích thước </h6>
                </div>
                <p>110*55*75cm</p>
              </div>
              <div className="decription-item">
                <div className="col-3">
                  <h6>Gửi từ</h6>
                </div>
                <p>Hà nội</p>
              </div>
            </div>
          )}
          {currentTab === 2 && (
            <div className="container">
              <div className="decription-detail">Chào mừng bạn đến 💗💗💗</div>
              <div className="decription-detail">
                Vui lòng đọc chi tiết sản phẩm trước khi đặt hàng, chúng tôi sẽ
                trả lời tin nhắn của bạn ngay khi có thể. Nếu bạn có bất kỳ câu
                hỏi nào, vui lòng liên hệ với chúng tôi kịp thời.
              </div>
              <div className="decription-detail">
                📍 Sản phẩm này sẽ được vận chuyển trong vòng 24 giờ sau khi đặt
                hàng, đảm bảo chất lượng là 12 tháng，miễn phí để bổ sung các
                hạt bọt trong thời hạn sử dụng
              </div>
              <div className="decription-detail">
                -----------------------------------------------------------------------------💗💗💗
              </div>
              <div className="decription-detail">🎈【Chi tiết sản phẩm】🎈</div>
              <div className="decription-detail">
                Ghế Lười Hạt Xốp Dáng Sofa dài, phong Cách Hiện Đại Size To. Ghế
                Hạt Xốp là vật dụng hiện đang rất thịnh hành vì độ thoải mái và
                kiểu dáng trẻ trung, phối màu bắt mắt, được sử dụng nhiều trong
                phòng ngủ, phòng khách, quán café, mang đến cho bạn những tư thế
                ngồi thoải mái, dùng được cho mọi không gian và đặc biệt là rất
                dễ sử dụng, GIÚP BẠN THƯ GIÃN VÀ THOẢI MÁI.
                <br />
                Ghế Lười Hạt Xốp Dáng Sofa dài, phong Cách Hiện Đại Size To. Ghế
                Hạt Xốp là vật dụng hiện đang rất thịnh hành vì độ thoải mái và
                kiểu dáng trẻ trung, phối màu bắt mắt, được sử dụng nhiều trong
                phòng ngủ, phòng khách, quán café, mang đến cho bạn những tư thế
                ngồi thoải mái, dùng được cho mọi không gian và đặc biệt là rất
                dễ sử dụng, GIÚP BẠN THƯ GIÃN VÀ THOẢI MÁI. <br />
                Kích thước: dài x rộng x cao = 110cm x 65cm x 50cm <br />
                cao cấp, bền bỉ cùng với những đường chỉ may tinh xảo, chắc
                chắn. Bên trong cấu tạo từ những hạt xốp vừa giúp ghế lười có
                thể thay đổi hình dáng vừa giữ cho ghế không bị xẹp sau một thời
                gian sử dụng. <br />
                Vỏ ghế có dây kéo có thể dễ dàng kéo đổ xốp ra và giặt sạch sau
                đó sử dụng bình thường. Ghế lười có khối lượng rất nhẹ dễ dàng
                di chuyển và có thể cất ở bất cứ đâu nếu không dùng đến.
                <br /> Ghế lười là lựa chọn phù hợp nhất cho mục đích xem phim
                hay đọc sách nhờ ưu điểm chống đau lưng hoàn hảo. Chiếc ghế có
                thể thay đổi hình dáng bất kì tùy vào tư thế ngồi của người
                dùng, giúp chống mỏi lưng một cách hiệu quả nhất. Ngoài công
                dụng để ngồi ghế lười giọt nước còn như một vật trang trí giúp
                cho căn phòng của bạn trở nên sống động hơn
              </div>
              <div className="decription-detail">
                -----------------------------------------------------------------------------💗💗💗
              </div>
              <div className="decription-detail pb-2">
                💖Sản phẩm của cửa hàng nhỏ đều là chụp hiện vật, có bảo đảm
                chất lượng, xin yên tâm mua💖
                <br />
                💖Kích thước sản phẩm là tất cả các phép đo bằng tay, bởi vì
                cách đo và đo lường khác nhau, có lỗi 1-3cm, xin vui lòng hiểu💖
              </div>
            </div>
          )}
          {currentTab === 3 && <div>Nhận xét/Đánh giá</div>}
        </div>
      </>
    );
  }
}

export default memo(Product);
