import {memo, useState} from "react";
import "./style.scss";
import { BsBellFill, BsGlobe2, BsFillGearFill, BsFillEnvelopeArrowUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser, AiOutlineMenu, AiOutlinePhone   } from "react-icons/ai";
import { formaster } from "utils/formater";
import { ROUTERS } from "utils/router";

const Header = () =>{

    const [isShowCategories, setShowCategories] = useState (true)

    const [menus] = useState ([
        {
            name: 'Trang chủ',
            path: ROUTERS.USER.HOME, 

        },
        {
            name: 'Cửa hàng',
            path: ROUTERS.USER.STORE,

        },
        {
            name: 'Sản phẩm',
            path:  "",
            isShowSubmenu: false,
            child: [
                {
                    name: 'Ghế',
                    path:  "",
                },
                {
                    name: 'Bàn',
                    path:  "",
                },
                {
                    name: 'Đồ trang trí',
                    path:  "",
                },
            ]
        },
        {
            name: 'Bài viết',
            path: "",

        },
        {
            name: 'Liên hệ',
            path: "",

        },
    ])

    return (
        <>
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header-top-left">
                        <ul>
                            <li>
                                <BsFillEnvelopeArrowUpFill  />
                                wendys@gmail.com
                            </li>
                            <li>
                                Miễn phí ship cho đơn từ {formaster(100000)}
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header-top-right">
                        <ul>
                            <li>
                                <Link to={""}>
                                    < BsBellFill/>
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
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="header-logo">
                        <h1> <span>Wendy</span> SHOP</h1>
                    </div>
                </div>
                <div className="col-6">
                    <div className="header-menu">
                        <ul>
                            {
                                menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                        {
                                            menu.child && (
                                                <ul className="header-menu-dropdown">
                                                    {
                                                        menu.child.map((childItem, childKey) => (
                                                            <li key={`${menuKey}-${childKey}`}>
                                                                <Link to={childItem?.path}>{childItem?.name}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                    
                                                </ul>
                                            )
                                        }
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                </div>
                <div className="col-3">
                <   div className="header-cart">
                        <ul>
                            <li>
                                <Link to={""}>
                                    <AiOutlineUser    /> 
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineShoppingCart />  <span>5</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineHeart  />  <span>5</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row  hero-categories-container">
                <div className="col-3  hero-categories">
                    <div className="hero-categories-all" onClick={() => setShowCategories(!isShowCategories)}>
                        <AiOutlineMenu /> 
                        Danh sách sản phẩm
                    </div>

                    <ul className={isShowCategories ? "" : "hidden"}>
                        <li>
                            <Link to={""}>Bàn kính</Link>
                        </li>
                        <li>
                            <Link to={""}>Bàn gỗ</Link>
                        </li>
                        <li>
                            <Link to={""}>Ghế tựa</Link>
                        </li>
                        <li>
                            <Link to={""}>sofa</Link>
                        </li>
                        <li>
                            <Link to={""}>Kệ tủ</Link>
                        </li>
                        <li>
                            <Link to={""}>Đồ trang trí</Link>
                        </li>
                    </ul>
                    
                </div>
                <div className="col-9 ">
                    <div className="row">
                        <div className="col-9">
                        <div className="hero-search-container">
                            <div className="hero-search">
                                <div className="hero-search-form">
                                    <form>
                                        <input type="" name="" value={""} placeholder="Bạn đang tìm gì?"/>
                                        <button type="submit" >
                                            Tìm kiếm
                                        </button>
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
                            <h2> Nội thất <br />Phòng khách</h2>
                            <p>Sale tới 50% toàn bộ sản phẩm</p>
                            <Link to={""} className="primary-btn">Mua ngay</Link>
                        </div>
                   </div>
                </div>
               
            </div>
        </div>
        </>
    )
};

export default memo(Header)