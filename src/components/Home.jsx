import React, { useEffect } from 'react'

const Home = ({ isHoveringRef }) => {

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    const texts = document.querySelectorAll(".hover-text");
    const handlers = [];

    texts.forEach((el) => {
      const handleMouseEnter = () => {
        const rect = el.getBoundingClientRect();

        isHoveringRef.current = true;

        cursor.classList.add("active");
        cursor.style.width = rect.width + "px";
        cursor.style.height = rect.height + "px";
        cursor.style.transition = "width 0.2s ease, height 0.2s ease, top 0.2s ease, left 0.2s ease";
        cursor.style.top = rect.top + rect.height / 2 + "px";
        cursor.style.left = rect.left + rect.width / 2 + "px";
      };

      const handleMouseLeave = () => {
        isHoveringRef.current = false;

        cursor.classList.remove("active");
        cursor.style.transition = "";
        cursor.style.width = "30px";
        cursor.style.height = "30px";
      };

      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
      handlers.push({ el, handleMouseEnter, handleMouseLeave });
    });

    return () => {
      handlers.forEach(({ el, handleMouseEnter, handleMouseLeave }) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isHoveringRef]);

  return (
    <div className='min-h-screen flex justify-center text-white items-center'>
      <div className='items-center h-140 w-340'>
        <div className='flex items-baseline'>
          <h1 className='text-7xl hover-text cursor-pointer'>I'm a</h1>
          <h1 className='text-9xl hover-text cursor-pointer'>FULL-STACK</h1>
        </div>
        <div className='flex justify-end' >
          <h1 className='text-9xl flex justify-end hover-text cursor-pointer'>DEVELOPER &</h1>
        </div>
        <div className='flex items-start' >
          <h1 className='text-9xl hover-text cursor-pointer'>SOFTWARE</h1>
        </div>
        <div className='flex justify-end' >
          <h1 className='text-9xl  hover-text cursor-pointer'>ENGINEER</h1>
        </div>
      </div>
    </div>
  )
}

export default Home