import Banner from "../../components/pageComponent/banner/banner"
import DiscountCard from "../../components/pageComponent/discountCard/discountCard"
import WorkFlowCard from "../../components/pageComponent/workFlow/workFlow";
import "./dashboardPage.scss"
import { MdLocationOn } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import PopularItems from "../../components/pageComponent/popularItems/popularItems";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import FeaturedCard from "../../components/pageComponent/featuredCard/featuredCard";
import CustomButton from "../../components/global/button/button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SearchFood from "../searchFood/searchFood";
import InstallApp from "../../components/pageComponent/installAppSection/installApp";
import ProcessToOrder from "../../components/pageComponent/processToOrder/processToOrder";

const workFlowCardData = [
    {
        icon: MdLocationOn,
        title: "Select location",
        description: "Choose the location where your food will be delivered.",
    },
    {
        icon: GrNotes,
        title: "Choose order",
        description: "Check over hundreds of menus to pick your favorite food",
    },
    {
        icon: FaHandHoldingDollar,
        title: "Pay advanced",
        description: "It's quick, safe, and simple. Select several methods of payment",
    },
    {
        icon: IoFastFoodSharp,
        title: "Enjoy meals",
        description: "Food is made and delivered directly to your home.",
    },
];

export default function DashboardPage() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const searchSilderPrevRef = useRef(null);
    const searchSilderNextRef = useRef(null);
    return (
        <section className="dashboardPage">
            <Banner />
            <div className="discountSeaction">
                {
                    [...Array(4)].map((_item, i) => {
                        return <DiscountCard key={i} />
                    })
                }
            </div>
            <div className="workSeaction">
                <div className="titlePart">
                    <h2>How does it work</h2>
                </div>
                <div className="cardWrapper">
                    {workFlowCardData.map((item, i) => {
                        return <WorkFlowCard key={i}
                            icon={item.icon}
                            title={item.title}
                            description={item.description} />
                    })}
                </div>
            </div>
            <div className="popularItems">
                <div className="titlePart">
                    <h3>Popular items</h3>
                </div>
                <div className="silderWrapper">
                    <button className="sliderBtn" ref={prevRef}>
                        <RiArrowLeftSLine />
                    </button>
                    <Swiper slidesPerView={5}
                        spaceBetween={"20px"}
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="mySwiper">
                        {
                            [...Array(10)].map((_item, i) => {
                                return <SwiperSlide><PopularItems key={i} /></SwiperSlide>
                            })}
                    </Swiper>

                    <button className="sliderBtn" ref={nextRef}>
                        <RiArrowRightSLine />
                    </button>
                </div>
            </div>
            <div className="featuredSection">
                <div className="titlePart">
                    <h3>Featured Restaurants</h3>
                </div>
                <div className="restaurantCardWrapper">
                    {
                        [...Array(8)].map((_item, i) => {
                            return <FeaturedCard key={i} />
                        })
                    }
                </div>
                <CustomButton btnTxt={"view all"} imgEle={<MdOutlineKeyboardArrowRight />} />
            </div>
            <div className="searchFoodSeaction">
                <div className="topPart">
                    <div className="titlePart">
                        <h3>Search by Food</h3>
                    </div>
                    <div className="controlPart">
                        <button>
                            view All <span>
                                <MdOutlineKeyboardArrowRight />
                            </span>
                        </button>
                        <div>
                            <button ref={searchSilderPrevRef}>
                                <RiArrowLeftSLine />
                            </button>
                            <button ref={searchSilderNextRef}>
                                <RiArrowRightSLine />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="silderWrapper">
                    <Swiper slidesPerView={6}
                        spaceBetween={"20px"}
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: searchSilderPrevRef.current,
                            nextEl: searchSilderNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = searchSilderPrevRef.current;
                            swiper.params.navigation.nextEl = searchSilderNextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        // autoplay={{ delay: 2000 }}
                        breakpoints={{
                            320: { slidesPerView: 3 },
                            480: { slidesPerView: 4 },
                            768: { slidesPerView: 5 },
                            1024: { slidesPerView: 6 },
                        }}
                        className="mySwiper">
                        {
                            [...Array(10)].map((_item, i) => {
                                return <SwiperSlide><SearchFood key={i} /></SwiperSlide>
                            })}
                    </Swiper>
                </div>
            </div>
            <div>
                <InstallApp />
            </div>
            <div className="processToOrderWrapper">
                <ProcessToOrder />
                <ProcessToOrder />
                <ProcessToOrder />
            </div>

            <div className="bestDealPart">
                <div className="">
                    <h3>
                        Are you ready to order
                        with the best deals?
                    </h3>
                    <CustomButton btnTxt={"PROCEED TO ORDER"} imgEle={<MdOutlineKeyboardArrowRight />} />
                </div>
            </div>
        </section>
    )
}
