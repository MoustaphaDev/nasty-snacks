import type { StateUpdater } from 'preact/hooks'

interface Props {
  mobileControlData: {
    overlay: (mobileOpen: boolean) => void
    mobileOpen: boolean
    setMobileOpen: StateUpdater<boolean>
  }
}

export const MobileNav = ({ mobileControlData }: Props) => {
  const { overlay, mobileOpen, setMobileOpen } = mobileControlData

  return (
    <nav className={`h-[100vh] w-[100vw] z-[2] text-center`}>
      <div class='flex gap-2 justify-evenly items-center'>
        <button
          className={`ml-6`}
          id='closeMobileNav'
          onClick={() => {
            setMobileOpen(false)
            overlay(mobileOpen)
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-8 h-8'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
        </button>
        <h1 className='p-2 -translate-x-6'>
          <a href='/'>
            <span className='text-gradient text-5xl font-extrabold tracking-widest'>
              NASTY SNACKS
            </span>
          </a>
        </h1>
      </div>
      <ul className='mt-6 text-gradient text-center font-extrabold my-auto lg:flex gap-12 flex flex-col items-center justify-center p-6 child-hover:scale-105 child:hover-grow max-w-[100vw]'>
        <li>
          <a href='/#band'>BAND</a>
        </li>
        <li>
          <a href='/#music'>MUSIC</a>
        </li>
        <li>
          <a href='/#tour'>TOUR</a>
        </li>
        <li>
          <a href='/media'>MEDIA</a>
        </li>
        <li>
          <a href='/merch'>MERCH</a>
        </li>
        <li>
          <a href='/contact'>CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}
