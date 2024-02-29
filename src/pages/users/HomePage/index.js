import {memo} from "react";
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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./style.scss"
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formaster } from "utils/formater";

const HomePage = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      }
      
    const sliderItems = [
        {
            bgImg: cat1Img,
            name: "Bow Chair"
        },
        {
            bgImg: cat2Img,
            name: "Sofa"
        },
        {
            bgImg: cat3Img,
            name: "Bàn thấp"
        },
        {
            bgImg: cat4Img,
            name: "Phụ kiện"
        },
        {
            bgImg: cat5Img,
            name: "Bàn cao"
        },
    ]

    const featProducts = {
        Furniture: {
            title: "Nội thất",
            products: [
                {
                    img: feature1Img,
                    name: "Bow Chair",
                    price: 1290000
                },
                {
                    img: feature2Img,
                    name: "Bow Chair",
                    price: 1290000
                },
                {
                    img: feature1Img,
                    name: "Bow Chair",
                    price: 1290000
                },
                {
                    img: feature2Img,
                    name: "Bow Chair",
                    price: 1290000
                },
                {
                    img: feature1Img,
                    name: "Bow Chair",
                    price: 1290000
                },
                {
                    img: feature2Img,
                    name: "Bow Chair",
                    price: 1290000
                },
                {
                    img: feature1Img,
                    name: "Bow Chair",
                    price: 1290000
                },
                {
                    img: feature2Img,
                    name: "Bow Chair",
                    price: 1290000
                },
            ]
        },
        Livingroom: {
            title: "Phòng khách",
            products: [
                {
                    img: feature3Img,
                    name: "Sofa",
                    price: 1290000
                },
                {
                    img: feature4Img,
                    name: "Sofa",
                    price: 1109000
                },
                {
                    img: feature3Img,
                    name: "Sofa",
                    price: 1290000
                },
                {
                    img: feature4Img,
                    name: "Sofa",
                    price: 1109000
                },
                {
                    img: feature3Img,
                    name: "Sofa",
                    price: 1290000
                },
                {
                    img: feature4Img,
                    name: "Sofa",
                    price: 1109000
                },
                {
                    img: feature3Img,
                    name: "Sofa",
                    price: 1290000
                },
                {
                    img: feature4Img,
                    name: "Sofa",
                    price: 1109000
                },
                
            ]
        },
        Bedroom: {
            title: "Phòng ngủ",
            products: [
                {
                    img: feature5Img,
                    name: "Bàn trang điểm",
                    price: 1290000
                },
                {
                    img: feature8Img,
                    name: "Bàn trang điểm",
                    price: 919000
                },
                {
                    img: feature5Img,
                    name: "Bàn trang điểm",
                    price: 1290000
                },
                {
                    img: feature8Img,
                    name: "Bàn trang điểm",
                    price: 919000
                },
                {
                    img: feature5Img,
                    name: "Bàn trang điểm",
                    price: 1290000
                },
                {
                    img: feature8Img,
                    name: "Bàn trang điểm",
                    price: 919000
                },
                {
                    img: feature5Img,
                    name: "Bàn trang điểm",
                    price: 1290000
                },
                {
                    img: feature8Img,
                    name: "Bàn trang điểm",
                    price: 919000
                },
            ]
        },
        Bathroom: {
            title: "Phòng tắm",
            products: [
                {
                    img: feature6Img,
                    name: "Trang trí",
                    price: 299000
                },
                {
                    img: feature6Img,
                    name: "Trang trí",
                    price: 299000
                },
                {
                    img: feature6Img,
                    name: "Trang trí",
                    price: 299000
                },
                {
                    img: feature6Img,
                    name: "Trang trí",
                    price: 299000
                },
                {
                    img: feature6Img,
                    name: "Trang trí",
                    price: 299000
                },
            ]
        },
        Diningroom: {
            title: "Nhà bếp",
            products: [
                {
                    img: feature7Img,
                    name: "Bàn ăn",
                    price: 2019000
                },
                {
                    img: feature7Img,
                    name: "Bàn ăn",
                    price: 2019000
                },
                {
                    img: feature7Img,
                    name: "Bàn ăn",
                    price: 2019000
                },
                {
                    img: feature7Img,
                    name: "Bàn ăn",
                    price: 2019000
                },
                {
                    img: feature7Img,
                    name: "Bàn ăn",
                    price: 2019000
                },
            ]
        },
    }
    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
        

        Object.keys(data).forEach((key,index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);

            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className="col-3" key={j}>
                        <div className="featured-item">
                            <div className="featured-item-pic" style={{
                                backgroundImage: `url(${item.img})`,
                            }}>
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
                                <Link to="">
                                    {item.name}
                                </Link>
                            </h6>
                            <h5>{formaster(item.price)}</h5>
                        </div>
                        </div>
                    </div>
                )
            });
            tabPanels.push(tabPanel);
        });

        

        return (
            <Tabs>
                <TabList>
                    {tabList}
                </TabList>
                {tabPanels.map((item, key) => (
                    <TabPanel key={key}>
                        <div className="row">{item}</div>
                    </TabPanel>
                ))}
            </Tabs>
            );
    }

    return (
    <>
     {/* Categories Begin */}
     <div className="container container-categories-slider">
        <Carousel responsive={responsive} className="categories-slider">
            {
                sliderItems.map((item, key) => (
                    <div 
                        className="categories-slider-item"
                        style={{backgroundImage: `url(${item.bgImg})`}} 
                        key={key}   
                    >
                        <p>{item.name}</p>
                    </div>
                )) 
            }
            
            
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
    </>
    );
};

export default memo(HomePage)