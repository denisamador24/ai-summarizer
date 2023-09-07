import { logo } from '../assets';
const Hero = () => {
  return (
    <header className='w-full'>
      <nav className='mb-10 pt-3 flex justify-between items-center'>
        <img
          width={128}
          src={logo}
          alt="sumz_logo"
          className='object-contain'
        />
        <button
          onClick={() => window.open('https://github.com/denisamador24')}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
        Summarizer Articles with
        <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer that transform lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero