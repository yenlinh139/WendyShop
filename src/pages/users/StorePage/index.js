import { memo } from "react";
import "react-multi-carousel/lib/styles.css";
import feature1Img from "assets/users/images/featured/1.png";
import feature2Img from "assets/users/images/featured/2.png";
import feature3Img from "assets/users/images/featured/3.png";
import feature4Img from "assets/users/images/featured/4.png";
import feature5Img from "assets/users/images/featured/5.png";
import feature6Img from "assets/users/images/featured/6.png";
import feature7Img from "assets/users/images/featured/7.png";
import feature8Img from "assets/users/images/featured/8.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./style.scss";
import {
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formaster } from "utils/formater";
import { ROUTERS } from "utils/router";

const StorePage = () => {
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
          img: feature3Img,
          name: "Sofa",
          price: 1290000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature4Img,
          name: "Sofa",
          price: 1109000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature5Img,
          name: "Bàn trang điểm",
          price: 1290000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature8Img,
          name: "Bàn trang điểm",
          price: 919000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature6Img,
          name: "Trang trí",
          price: 299000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature7Img,
          name: "Bàn ăn",
          price: 2019000,
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
          img: feature3Img,
          name: "Sofa",
          price: 1290000,
          path: ROUTERS.USER.PRODUCT,
        },
        {
          img: feature4Img,
          name: "Sofa",
          price: 1109000,
          path: ROUTERS.USER.PRODUCT,
        },
      ],
    },
  };

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      // tabList.push(<Tab key={index}>{data[key].title}</Tab>);

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
      <div className="shop-title">
        <h2>Cửa hàng</h2>
      </div>
      <div className="container">
        <div className="row">
          <did className="col-3">
            <div className="hero-search-container">
              <div className="hero-search">
                <div className="hero-search-form">
                  <form>
                    <input type="text" placeholder="Bạn đang tìm gì?..." />
                    <button type="submit">
                      <AiOutlineSearch />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="menu-shop">
              <h4>Danh mục sản phẩm</h4>
              <ul>
                <li>
                  <Link to={""}>Ghế sofa</Link>
                </li>
                <li>
                  <Link to={""}>Bow chair</Link>
                </li>
                <li>
                  <Link to={""}>Bàn thấp</Link>
                </li>
                <li>
                  <Link to={""}>Bàn cao</Link>
                </li>
                <li>
                  <Link to={""}>Ghế tựa</Link>
                </li>
                <li>
                  <Link to={""}>Phụ kiện</Link>
                </li>
              </ul>
            </div>
            <div className="menu-shop">
              <h4>Phân loại</h4>
              <ul>
                <li>
                  <Link to={""}>Sản phẩm gỗ</Link>
                </li>
                <li>
                  <Link to={""}>Sản phẩm da</Link>
                </li>
                <li>
                  <Link to={""}>Hỗn hợp</Link>
                </li>
              </ul>
            </div>
            <div className="menu-shop">
              <h4>Kích thước</h4>
              <ul>
                <li>
                  <Link to={""}>Size nhỏ</Link>
                </li>
                <li>
                  <Link to={""}>Size vừa</Link>
                </li>
                <li>
                  <Link to={""}>Size to</Link>
                </li>
                <li>
                  <Link to={""}>Siêu to</Link>
                </li>
              </ul>
            </div>
          </did>
          <div className="col-9">
            <div className="Featured">
              {renderFeaturedProducts(featProducts)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(StorePage);
