import {memo} from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram,  AiOutlineTwitter, AiOutlineGooglePlus  } from "react-icons/ai";
import { CgFacebook  } from "react-icons/cg";
import { BiLogoLinkedin } from "react-icons/bi";
import "./style.scss";

const Footer = () =>{
    return (
    <>
        <div className="footer">
           <div className="container">
            <div className="row">
                <div className="col-3 col-md-6 col-sm-12">
                    <div className="footer-about">
                        <h1 className="footer-about-logo"><span>Wendy</span> SHOP</h1>
                        <ul>
                            <li>Địa chỉ: Thủ Đức, Tp. Hồ Chí Minh</li>
                            <li>Phone: 0395-123-029</li>
                            <li>Email: wendys@gmail.com</li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-6 col-md-6 col-sm-12">
                    <div className="footer-widget">
                        <h6>Cửa hàng</h6>
                        <ul>
                            <li>
                                <Link to={""}>Liên hệ</Link>
                            </li>
                            <li>
                                <Link to={""}>Thông tin về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to={""}>Sản phẩm kinh doanh</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to={""}>Thông tin tài khoản</Link>
                            </li>
                            <li>
                                <Link to={""}>Giỏ hàng</Link>
                            </li>
                            <li>
                                <Link to={""}>Danh sách yêu thích</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-3 col-md-12 col-sm-12">
                    <div className="footer-widget">
                        <h6>Khuyến mãi & ưu đãi</h6>
                        <p>Đăng ký nhận thông tin</p>
                        <form action="#">
                            <div className="input-group">
                                <input type="text" placeholder="Nhập email" />
                                <button type="submit" className="button-submit">
                                    Đăng ký
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-6 footer-widget-social">
                        <ul>
                            <li>
                                <Link to={""}>
                                <AiOutlineInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <CgFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineTwitter  />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineGooglePlus   />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <BiLogoLinkedin   />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">

                    </div>
                </div>
            </div>
        </div>
        
    </>
    );
};

export default memo(Footer)