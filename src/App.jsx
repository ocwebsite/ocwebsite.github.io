import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo from './images/logo.png';
import download from './images/download.png';
import Errors from './components/Errors';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/license" element={<License />} />
                    <Route path="/faq" element={<Faq />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

function Home() {
    return (
        <>
            <div className='navbar'>
                    <motion.div className='flex items-center' initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                        <img src={ logo } alt='logo' width={ 64 } height={ 64 } className='drop-shadow-xl inline-block' />
                        <h1 className='logo'>Onix Client</h1>
                    </motion.div>
                    <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                        <Link to='/' className='nav-btn-selected'>Home</Link>
                        <Link to='/license' className='nav-btn'>License</Link>
                        <Link to='/faq' className='nav-btn'>FaQ</Link>
                    </motion.div>
            </div>
            <div className='h-[200vh]'>

                <div className='flex flex-wrap justify-center items-center bg-gradient-to-l from-[#159957] to-[#155799] h-[50vh]'>
                    <div className='text-center'>
                        <motion.h1 className='font-light text-5xl text-white drop-shadow-xl my-[1.25rem]' initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 1 }} >Onix Client</motion.h1>
                        <motion.a className='download' href='https://github.com/notcarlton/OnixLauncher/releases/latest/download/OnixLauncher.exe' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
                            <img src={ download } alt='download' className='inline-block opacity-70' width={ 24 } height={ 24 } /> Download
                        </motion.a>
                    </div>
                </div>

                <div className='flex flex-wrap justify-start items-center bg-gradient-to-l h-[50vh]'>
                    <div className='text-left wrapper'>
                        <motion.h1 className='font-light text-5xl text-white drop-shadow-xl my-[1.25rem]' initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 2 }} >How to use?</motion.h1>
                        <motion.p className='article' initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>Download the launcher, click on "Launch" join world/server, press "<a className='highlighted'>L</a>". Make sure to look properly, we also have an <Link className='highlighted' to='/faq'>FAQ</Link>. If you still need more assistance, you canmake a ticket on our support <a className='highlighted' href='https://discord.gg/onixclient' target='_blank'>Discord</a>.</motion.p>
                    </div>
                </div>
                
                <Errors />
            </div>
        </>
    )
}

function License() {
    return (
        <>
            <motion.div className='navbar'>
                    <div className='flex items-center'>
                        <img src={ logo } alt='logo' width={ 64 } height={ 64 } className='drop-shadow-xl inline-block' />
                        <h1 className='logo'>Onix Client</h1>
                    </div>
                    <div>
                        <Link to='/' className='nav-btn'>Home</Link>
                        <Link to='/license' className='nav-btn-selected'>License</Link>
                        <Link to='/faq' className='nav-btn'>FaQ</Link>
                    </div>
            </motion.div>
            <div className='h-[200vh]'>
            </div>
        </>
    )
}

function Faq() {
    return (
        <>
            <motion.div className='navbar'>
                    <div className='flex items-center'>
                        <img src={ logo } alt='logo' width={ 64 } height={ 64 } className='drop-shadow-xl inline-block' />
                        <h1 className='logo'>Onix Client</h1>
                    </div>
                    <div>
                        <Link to='/' className='nav-btn'>Home</Link>
                        <Link to='/license' className='nav-btn'>License</Link>
                        <Link to='/faq' className='nav-btn-selected'>FaQ</Link>
                    </div>
            </motion.div>
            <div className='h-[200vh]'>
            </div>
        </>
    )
}

export default App;
