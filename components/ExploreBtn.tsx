"use client";
import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      onClick={() => {
        console.log("Clicked");
        posthog.capture("explore_events_clicked");
      }}
      className="mt-7 mx-auto"
    >
      <a href="#events">
        Explore Events
        <Image
          src="/icons/arrow-down.svg"
          alt="arroww-down"
          width={24}
          height={24}
        />
      </a>
    </button>
  );
};

export default ExploreBtn;
