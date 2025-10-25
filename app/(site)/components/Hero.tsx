
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-between px-10 md:px-20 max-w-[1600px] mx-auto">
      <div className="w-full md:w-[55%]">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-white">
          Hello,
          <br />
          This is <span className="text-[#ff4fa3]">Sina Amareh</span>,<br />
          I'm a <span className="text-[#3fb5a3]">Software Engineer & System Designer</span>.
        </h1>
        <p className="text-gray-400 mt-6 text-lg max-w-[45ch] leading-relaxed">
          I design and build intelligent, scalable systems that merge logic, creativity, and engineering
          precision.
        </p>
        <div className="flex gap-6 mt-10">
          <button className="px-8 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#ff4fa3] to-[#3fb5a3] hover:scale-105 shadow-[0_0_20px_#ff4fa366] transition-all duration-300">
            Contact Me
          </button>
          <button className="px-8 py-3 rounded-xl text-[#ff4fa3] border border-[#ff4fa3] hover:bg-[#ff4fa310] hover:scale-105 transition-all duration-300">
            Get Resume
          </button>
        </div>
        <div className="flex gap-5 mt-6 text-2xl text-[#ff4fa3]">
          <FaGithub className="hover:text-[#3fb5a3] cursor-pointer" />
          <FaLinkedin className="hover:text-[#3fb5a3] cursor-pointer" />
          <FaTwitter className="hover:text-[#3fb5a3] cursor-pointer" />
        </div>
      </div>
      <div className="hidden md:block w-[45%]">
        <div className="w-full md:w-[520px] bg-[#0f111a] rounded-xl border border-[#23263a] p-6 shadow-[0_0_40px_#3fb5a333] font-mono text-sm text-gray-200">
          <pre>
            <code>
              {`const developer = {
  name: 'Sina Amareh',
  focus: ['Backend', 'System Architecture', 'AI Integration'],
  traits: ['Problem Solver', 'Creative Thinker', 'Engineer'],
  hireable: true
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Hero;
