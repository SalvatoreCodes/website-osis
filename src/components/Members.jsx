import React from "react";

import { Link } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { membersCarouselData } from "../membersCarouselData";

function Members() {
  return (
    <div className="members">
      <div className="members-content">
        <h1>Our Members</h1>
        <Link to="/members">
          <button>Click Here!</button>
        </Link>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="members-carousel"
      >
        {membersCarouselData.map((member) => {
          return (
            <SwiperSlide key={member.id} className="member-slide">
              <img src={member.image} alt={member.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Members;
