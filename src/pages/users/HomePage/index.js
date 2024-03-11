import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cat1Img from "assets/users/images/categories/cat-01.png";
import cat2Img from "assets/users/images/categories/cat-02.png";
import cat3Img from "assets/users/images/categories/cat-03.png";
import cat4Img from "assets/users/images/categories/cat-04.png";
import cat5Img from "assets/users/images/categories/cat-05.png";
import feature1Img from "assets/users/images/featured/1.png";
import feature2Img from "assets/users/images/featured/2.png";
import feature3Img from "assets/users/images/featured/3.png";
import feature4Img from "assets/users/images/featured/4.png";
import feature5Img from "assets/users/images/featured/5.png";
import feature6Img from "assets/users/images/featured/6.png";
import feature7Img from "assets/users/images/featured/7.png";
import feature8Img from "assets/users/images/featured/8.png";
import banner1Img from "assets/users/images/banner/banner-01.png";
import banner2Img from "assets/users/images/banner/banner-02.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./style.scss";
import {
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlinePhone,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formaster } from "utils/formater";
import { ROUTERS } from "utils/router";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItems = [
    {
      bgImg: cat1Img,
      name: "Bow Chair",
    },
    {
      bgImg: cat2Img,
      name: "Sofa",
    },
    {
      bgImg: cat3Img,
      name: "Bàn thấp",
    },
    {
      bgImg: cat4Img,
      name: "Phụ kiện",
    },
    {
      bgImg: cat5Img,
      name: "Bàn cao",
    },
  ];

  const featProducts = {
    Furniture: {
      title: "Nội thất",
      products: [
        {
          img: feature1Img,
          name: "Bow Chair",
          price: 1290000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature2Img,
          name: "Bow Chair",
          price: 1290000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature1Img,
          name: "Bow Chair",
          price: 1290000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature2Img,
          name: "Bow Chair",
          price: 1290000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature1Img,
          name: "Bow Chair",
          price: 1290000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature2Img,
          name: "Bow Chair",
          price: 1290000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature1Img,
          name: "Bow Chair",
          price: 1290000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature2Img,
          name: "Bow Chair",
          price: 1290000,
          path: ROUTERS.USER.PRODUCT,
        },
      ],
    },
    Livingroom: {
      title: "Phòng khách",
      products: [
        {
          img: feature3Img,
          name: "Sofa",
          price: 1290000,
        },
        {
          img: feature4Img,
          name: "Sofa",
          price: 1109000,
        },
        {
          img: feature3Img,
          name: "Sofa",
          price: 1290000,
        },
        {
          img: feature4Img,
          name: "Sofa",
          price: 1109000,
        },
        {
          img: feature3Img,
          name: "Sofa",
          price: 1290000,
        },
        {
          img: feature4Img,
          name: "Sofa",
          price: 1109000,
        },
        {
          img: feature3Img,
          name: "Sofa",
          price: 1290000,
        },
        {
          img: feature4Img,
          name: "Sofa",
          price: 1109000,
        },
      ],
    },
    Bedroom: {
      title: "Phòng ngủ",
      products: [
        {
          img: feature5Img,
          name: "Bàn trang điểm",
          price: 1290000,
        },
        {
          img: feature8Img,
          name: "Bàn trang điểm",
          price: 919000,
        },
        {
          img: feature5Img,
          name: "Bàn trang điểm",
          price: 1290000,
        },
        {
          img: feature8Img,
          name: "Bàn trang điểm",
          price: 919000,
        },
        {
          img: feature5Img,
          name: "Bàn trang điểm",
          price: 1290000,
        },
        {
          img: feature8Img,
          name: "Bàn trang điểm",
          price: 919000,
        },
        {
          img: feature5Img,
          name: "Bàn trang điểm",
          price: 1290000,
        },
        {
          img: feature8Img,
          name: "Bàn trang điểm",
          price: 919000,
        },
      ],
    },
    Bathroom: {
      title: "Phòng tắm",
      products: [
        {
          img: feature6Img,
          name: "Trang trí",
          price: 299000,
        },
        {
          img: feature6Img,
          name: "Trang trí",
          price: 299000,
        },
        {
          img: feature6Img,
          name: "Trang trí",
          price: 299000,
        },
        {
          img: feature6Img,
          name: "Trang trí",
          price: 299000,
        },
        {
          img: feature6Img,
          name: "Trang trí",
          price: 299000,
        },
      ],
    },
    Diningroom: {
      title: "Nhà bếp",
      products: [
        {
          img: feature7Img,
          name: "Bàn ăn",
          price: 2019000,
        },
        {
          img: feature7Img,
          name: "Bàn ăn",
          price: 2019000,
        },
        {
          img: feature7Img,
          name: "Bàn ăn",
          price: 2019000,
        },
        {
          img: feature7Img,
          name: "Bàn ăn",
          price: 2019000,
        },
        {
          img: feature7Img,
          name: "Bàn ăn",
          price: 2019000,
        },
      ],
    },
  };

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div className="col-3 col-md-4 col-sm-6 col-xs" key={j}>
            <div className="featured-item">
              <div
                className="featured-item-pic"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <ul className="featured-item-pic-hover">
                  <li>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </ul>
              </div>
              <div className="featured-item-text">
                <h6>
                  <Link to={item.path}>{item.name}</Link>
                </h6>
                <h5>{formaster(item.price)}</h5>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="hero-search-container">
              <div className="hero-search">
                <div className="hero-search-form">
                  <form>
                    <input type="text" placeholder="Bạn đang tìm gì?..." />
                    <button type="submit">Tìm kiếm</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="hero-phone">
              <div className="hero-phone-icon">
                <AiOutlinePhone />
              </div>
              <div className="hero-phone-text">
                <p>0395.123.029</p>
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-item">
          <div className="hero-text">
            <span>Mở bán vào ngày mai</span>
            <h2>
              {" "}
              Nội thất <br />
              Phòng khách
            </h2>
            <p>Sale tới 50% toàn bộ sản phẩm</p>
            <Link to={""} className="primary-btn">
              Mua ngay
            </Link>
          </div>
        </div>
      </div>
      {/* Categories Begin */}
      <div className="container container-categories-slider">
        <Carousel responsive={responsive} className="categories-slider">
          {sliderItems.map((item, key) => (
            <div
              className="categories-slider-item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Categories End */}
      {/* Featured Begin  */}
      <div className="container">
        <div className="Featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
      {/* Featured End */}

      <div className="container container-categories-banner">
        <div className="row">
          <div className="col-6 col-sm-12">
            <div
              style={{ backgroundImage: `url(${banner1Img})` }}
              className="categories-banner"
            >
              <p>Tin mới</p>
              <h4>Phòng khách</h4>
              <Link to="">Mua ngay</Link>
            </div>
          </div>
          <div className="col-6 col-sm-12">
            <div
              style={{ backgroundImage: `url(${banner2Img})` }}
              className="categories-banner"
            >
              <p>Xu hướng</p>
              <h4>Phòng ngủ</h4>
              <Link to="">Mua ngay</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
