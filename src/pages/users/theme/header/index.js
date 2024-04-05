import { memo, useState, useRef, useEffect } from "react";
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
  AiOutlineMenu,
} from "react-icons/ai";
import { formaster } from "utils/formater";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false); // State để điều khiển hiển thị khung đăng nhập
  const [username, setUsername] = useState(""); // State lưu trữ tên người dùng
  const [password, setPassword] = useState(""); // State lưu trữ mật khẩu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleUser = () => {
    setShowLogin(!showLogin);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    console.log(
      "Đăng nhập với tên người dùng:",
      username,
      "và mật khẩu:",
      password
    );
  };

  const handleOverlayClick = (event) => {
    // Kiểm tra xem sự kiện click có xuất phát từ phần tử login hay không
    if (!event.target.closest(".login")) {
      // Nếu không, đóng khung đăng nhập
      setShowLogin(false);
    }
  };

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
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
            <div className="col-6 col-lg-3 col-xl-3">
              <div className="header-logo">
                <h1>
                  {" "}
                  <span>Wendy</span> SHOP
                </h1>
              </div>
            </div>
            <div className="col-6 col-lg-9 col-xl-9">
              <div className="menuTop  d-lg-none d-xl-none">
                <button onClick={toggleMenu}>
                  <AiOutlineMenu />
                </button>
              </div>
              <div
                ref={sidebarRef}
                className={`menu ${isMenuOpen ? "open" : ""}`}
              >
                <div className="row ">
                  <div className="col-lg-8 col-xl-8">
                    <div className="header-menu">
                      <ul>
                        {menus?.map((menu, menuKey) => (
                          <li
                            key={menuKey}
                            className={menuKey === 0 ? "active" : ""}
                          >
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
                  <div className="col-lg-4 col-xl-4 ">
                    <div className="header-cart">
                      <ul>
                        {/* Icon người dùng */}
                        <li onClick={toggleUser}>
                          <AiOutlineUser />
                        </li>

                        {/* Overlay */}
                        {showLogin && (
                          <div
                            className="login-overlay"
                            onClick={handleOverlayClick}
                          ></div>
                        )}

                        {/* Khung đăng nhập */}
                        {showLogin && (
                          <div className="login">
                            <h2>Đăng nhập</h2>
                            <form>
                              <div>
                                <label>Tên người dùng:</label>
                                <input
                                  type="text"
                                  value={username}
                                  onChange={handleUsernameChange}
                                />
                              </div>
                              <div>
                                <label>Mật khẩu:</label>
                                <input
                                  type="password"
                                  value={password}
                                  onChange={handlePasswordChange}
                                />
                              </div>
                              <button type="button" onClick={handleLogin}>
                                Đăng nhập
                              </button>
                            </form>
                          </div>
                        )}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
