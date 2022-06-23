import React from 'react'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/9KlOmj2LnRmmvgeTSBKX8cZRNQtvO_Jdh-SyDNjzw8DVjJftfOI8bBsdQWcfiAbr4mOC-e42onTm6XxugzJAKtwSbc-X8a1PAQ-TP9A=s550')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }

const Hero = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>Discover, collect, and sell extraordinary NFTs</div>
                    <div className={style.description}>OpenSea is the world&apos;s first and larget NFT marketplace </div>
                    <div className={style.ctaContainer}>
                        <button className={style.accentedButton}>Explore</button>
                        <button className={style.button}>Create</button>
                    </div>
                </div>
                <div className={style.cardContainer}>
                    <img 
                    className="rounded-t-lg display_picture " 
                    src='https://lh3.googleusercontent.com/9KlOmj2LnRmmvgeTSBKX8cZRNQtvO_Jdh-SyDNjzw8DVjJftfOI8bBsdQWcfiAbr4mOC-e42onTm6XxugzJAKtwSbc-X8a1PAQ-TP9A=s550' 
                    />
                    <div className={style.infoContainer}>
                        <img 
                        className="h-[2.25rem] rounded-full "
                        src='https://lh3.googleusercontent.com/EuOY8xau20DC3QFQYSoGEkh1axNlxv-nYR9_ii4ah1kkkeMIJ_weEVWdl97tw4QxaZZYVyAmf8CyHInp4_l_wNk0IjfarMDY097LnFY=s0'                        />
                        <div className={style.author}>
                            <div className={style.name}>
                                Peripheral illusions
                            </div>
                            <a
                            className='text=[#1868b7]'
                            href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/91236794620621986641627806397936663631219965182240997565564980287758844035224"
                            >WorldofWomen</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero