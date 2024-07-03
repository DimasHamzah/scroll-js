import React, {useEffect, useRef, useState} from 'react';
import SideBar from "./side-bar";

const App = () => {
  const section2Ref = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const section2 = section2Ref.current;

      if (section2) {
        const rect = section2.getBoundingClientRect();

        if (rect.bottom >= 0 && rect.bottom <= window.innerHeight) {
         setShowSidebar(false);
        } else {
            setShowSidebar(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div>
          <section ref={section2Ref} style={{height: '100vh', border: '1px solid black'}}>Section 1</section>
          <section  style={{height: '100vh', border: '1px solid black'}}>Section 2</section>
          <section style={{height: '100vh', border: '1px solid black'}}>Section 3</section>
          <section style={{height: '100vh', border: '1px solid black'}}>Section 4</section>
          <section style={{height: '100vh', border: '1px solid black'}}>Section 5</section>
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
              <SideBar showSidebar={showSidebar}/>
          </div>
      </div>


  );
};

export default App;
