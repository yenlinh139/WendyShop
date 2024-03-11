import { memo, useState } from "react";
import "./style.scss";
import {
  BsBellFill,
  BsGlobe2,
  BsFillGearFill,
  BsFillEnvelopeArrowUpFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { formaster } from "utils/formater";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [menus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.STORE,
    },
    {
      name: "Sản phẩm",
      path: ROUTERS.USER.PRODUCT,
      isShowSubmenu: false,
      child: [
        {
          name: "Ghế",
          path: "",
        },
        {
          name: "Bàn",
          path: "",
        },
        {
          name: "Đồ trang trí",
          path: "",
        },
      ],
    },
    {
      name: "Bài viết",
      path: "",
    },
    {
      name: "Liên hệ",
      path: ROUTERS.USER.PROFILE,
    },
  ]);

  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-6 header-top-left">
              <ul>
                <li>
                  <BsFillEnvelopeArrowUpFill />
                  wendys@gmail.com
                </li>
                <li>Miễn phí ship cho đơn từ {formaster(100000)}</li>
              </ul>
            </div>
            <div className="col-6 header-top-right">
              <ul>
                <li>
                  <Link to={""}>
                    <BsBellFill />
                  </Link>
                  <span>Thông báo</span>
                </li>
                <li>
                  <Link to={""}>
                    <BsGlobe2 />
                  </Link>
                  <span>Ngôn ngữ</span>
                </li>
                <li>
                  <Link to={""}>
                    <BsFillGearFill />
                  </Link>
                  <span>Cài đặt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="menu">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="header-logo">
                <h1>
                  {" "}
                  <span>Wendy</span> SHOP
                </h1>
              </div>
            </div>
            <div className="col-6">
              <div className="header-menu">
                <ul>
                  {menus?.map((menu, menuKey) => (
                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                      <Link to={menu?.path}>{menu?.name}</Link>
                      {menu.child && (
                        <ul className="header-menu-dropdown">
                          {menu.child.map((childItem, childKey) => (
                            <li key={`${menuKey}-${childKey}`}>
                              <Link to={childItem?.path}>
                                {childItem?.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="header-cart">
                <ul>
                  <li>
                    <Link to={""}>
                      <AiOutlineUser />
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>
                      <AiOutlineShoppingCart /> <span>5</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>
                      <AiOutlineHeart /> <span>5</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
