import Banner from "../../components/pageComponent/banner/banner"
import DiscountCard from "../../components/pageComponent/discountCard/discountCard"
import WorkFlowCard from "../../components/pageComponent/workFlow/workFlow";
import "./dashboardPage.scss"
import { MdLocationOn } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";

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
        </section>
    )
}
