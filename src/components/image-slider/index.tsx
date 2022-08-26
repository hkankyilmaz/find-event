import React, { useRef } from "react";
import {
  SliderContainer,
  Slide,
  SlideItem,
  NextButton,
  PreviousButton,
} from "./styled";
import { useAppSelector } from "../../store/hook";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Slider: React.FC = () => {
  const InfoVenets = useAppSelector((state) => state.events.InfoEvents);
  const slideLength = useAppSelector((state) => state.events.InfoEvents.length);
  const SliderRef = useRef<HTMLElement | null>(null);
  let activeSlideIndex = 0;

  const changeSlide = (direction: string): void => {
    const sliderWidth = SliderRef.current!.clientWidth / slideLength;
    if (direction === "next") {
      activeSlideIndex++;
      if (activeSlideIndex >= 1 && activeSlideIndex - 4 < 7) {
        SliderRef.current!.style.transform = `translateX(-${
          activeSlideIndex * sliderWidth
        }px)`;
        if (activeSlideIndex === 7) {
          activeSlideIndex = 0;
          SliderRef.current!.style.transform = `translateX(-${
            activeSlideIndex * sliderWidth
          }px)`;
        }
      }
    } else if (direction === "previous") {
      if (activeSlideIndex === 0) {
        activeSlideIndex = 6;
        SliderRef.current!.style.transform = `translateX(-${
          activeSlideIndex * sliderWidth
        }px)`;
      }
      if (activeSlideIndex != 0) {
        activeSlideIndex--;
        SliderRef.current!.style.transform = `translateX(-${
          activeSlideIndex * sliderWidth
        }px)`;
      }
    }
  };

  // setInterval(() => {
  //   const sliderWidth: number = SliderRef.current!.clientWidth / slideLength;
  //   activeSlideIndex++;

  //   if (activeSlideIndex === 7) {
  //     activeSlideIndex = 0;
  //   }
  //   SliderRef.current!.style.transform = `translateX(-${
  //     activeSlideIndex * sliderWidth
  //   }px)`;
  // }, 3000);

  return (
    <SliderContainer>
      <NextButton
        onClick={() => {
          changeSlide("next");
        }}
      >
        {" "}
        <ArrowForwardIosIcon fontSize="large" style={{ color: "white" }} />{" "}
      </NextButton>
      <Slide<any> ref={SliderRef}>
        {InfoVenets.map((event) => (
          <SlideItem img={event.image}>
            <div>
              <p>{event.artist} </p>
            </div>
          </SlideItem>
        ))}
      </Slide>
      <PreviousButton
        onClick={() => {
          changeSlide("previous");
        }}
      >
        <ArrowBackIosIcon fontSize="large" style={{ color: "white" }} />
      </PreviousButton>
    </SliderContainer>
  );
};

export default Slider;
