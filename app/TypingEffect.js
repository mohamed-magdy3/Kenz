// components/TypingEffect.jsx
"use client";
import Typewriter from 'typewriter-effect';

export default function TypingEffect() {
  return (
    <div className="text-7xl md:text-7xl font-bold text-black h-16 ">
      <Typewriter
        options={{
          strings: [
            'اهلا بيك في موقع تِك زوون ',
            'كل اللي محتاجه في التكنولوجيا',
            'في مكان واحد ',
            ''
          ],
          autoStart: true,
          loop: true,
          delay: 95,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}