import Aurora from '@/components/ui/Aurora';
import AnimatedContent from '@/components/ui/AnimatedContent';

export default function Navbar() {
    return (
        <nav className="relative w-full flex justify-between p-14 text-white z-10 overflow-y-scroll">
          <div className="top-0 left-0 w-full h-full z-0 absolute">
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={true}
              config={{ tension: 10, friction: 15 }}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
            >
            <Aurora
              colorStops={["#42f5a4", "#6ec0f0", "#51f542"]}
              blend={1.0}
              amplitude={1.5}
              speed={1.0}
            />
            </AnimatedContent>
          </div>
          <div className="relative z-10 font-bold text-base">Logo</div>
          <div className="relative z-10 flex gap-5 text-base text-white font-normal">
            <a href="" className="hover:text-white hover:font-bold hover:-translate-y-1 duration-500">Home</a>
            <a href="" className="hover:text-white hover:font-bold hover:-translate-y-1 duration-500">About</a>
            <a href="" className="hover:text-white hover:font-bold hover:-translate-y-1 duration-500">Contact</a>
          </div>
        </nav>
    );
}