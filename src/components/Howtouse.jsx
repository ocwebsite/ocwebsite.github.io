import { Link } from 'react-router-dom';

function Howtouse() {
    return (
        <>
            <div className='flex flex-wrap justify-start items-center bg-gradient-to-l h-[50vh]'>
                <div className='text-left wrapper'>
                    <motion.h1 className='font-light text-5xl text-white drop-shadow-xl my-[1.25rem]' initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 2 }} >How to use?</motion.h1>
                    <motion.p className='article' initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>Download the launcher, click on "Launch" join world/server, press "<a className='highlighted'>L</a>". Make sure to look properly, we also have an <Link className='highlighted' to='/faq'>FAQ</Link>. If you still need more assistance, you canmake a ticket on our support <a className='highlighted' href='https://discord.gg/onixclient' target='_blank'>Discord</a>.</motion.p>
                </div>
            </div>
        </>
    )
}

export default Howtouse;