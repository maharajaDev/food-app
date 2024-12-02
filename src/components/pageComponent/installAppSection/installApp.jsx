import React from 'react';
import "./installApp.scss";
import ImageComponent from '../../ui/image';
export default function InstallApp() {
  return (
    <section className='installAppWrapper'>
      <div className="topFloatCard">
        <ul>
          <li>
            <ImageComponent src={"discounts.png"} />
            <p>Daily <br /> Discounts</p>
          </li>
          <li>
            <ImageComponent src={"live-tracking.png"} />
            <p>Live <br /> Tracking</p>
          </li>
          <li>
            <ImageComponent src={"quick-delivery.png"} />
            <p>Quick <br /> Delivery</p>
          </li>
        </ul>
      </div>
      <div className="bottomCardPart">
        <div className='moblieScreenImg'>
          <ImageComponent src={"mobileApp.png"} />
        </div>
        <div className='contentPart'>
          <h2>Install the app</h2>
          <p>
            It's never been easier to order food. Look for the finest discounts and you'll be lost in a world of delectable food
          </p>
          <div className='downloadPart'>
            <a href="#">
              <ImageComponent src={"app-store.png"} />
            </a>
            <a href="#">
              <ImageComponent src={"google-play.png"} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
