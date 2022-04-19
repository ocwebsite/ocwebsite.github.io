import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Errors() {
    return (
        <>
            <div className='flex flex-wrap justify-start items-center bg-gradient-to-l h-[50vh]'>
                <div className='text-left wrapper'>
                    <motion.h1 className='font-light text-5xl text-white drop-shadow-xl my-[1.25rem]' initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 3 }}>Potential errors</motion.h1>
                    
                    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 3.5 }}>

                        <div className='my-[1rem]'>
                            <p className='article font-normal'>Architecture error</p>
                            <p className='article text-lg lg:text-xl xl:text-2xl'>➦ You have minecraft 32-bit installed (Isn't supported)</p>
                        </div>

                        <div className='my-[1rem]'>
                            <p className='article font-normal'>Weird error happened during injecting</p>
                            <p className='article text-lg lg:text-xl xl:text-2xl'>➦ Try disabling your antivirus/excluding the launcher.</p>
                        </div>

                        <div className='my-[1rem]'>
                            <p className='article font-normal'>Unsupported version</p>
                            <p className='article text-lg lg:text-xl xl:text-2xl'>➦ OnixClient doesn't support the minecraft version you currently have.</p>
                        </div>

                        <div className='my-[1rem]'>
                            <p className='article font-normal'>Doesn't start at all</p>
                            <p className='article text-lg lg:text-xl xl:text-2xl'>➦ Try disabling your antivirus/excluding the launcher.</p>
                        </div>

                        <div className='my-[1rem]'>
                            <p className='article font-normal'>Launch does nothings</p>
                            <p className='article text-lg lg:text-xl xl:text-2xl'>➦ Try disabling your antivirus/excluding the launcher.</p>
                        </div>

                        <div className='my-[1rem]'>
                            <p className='article'>Is your issue not listed here or is in not clear? view the <Link className='highlighted' to='/faq'>FAQ</Link>.</p>
                        </div>

                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default Errors;