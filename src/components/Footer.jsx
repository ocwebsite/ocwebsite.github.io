import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <motion.div className='navbar'>
                <Link to='Home'>Home</Link>
                <Link to='About'>About</Link>
                <Link to='Contact'>Contact</Link>
            </motion.div>
        </>
    )
}

export default Footer;