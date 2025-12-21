import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <ul className='flex gap-x-10 justify-center'>

                <Link to="/"><li>home</li></Link>
                <Link to="/about"><li>about</li></Link>

                <li>contact</li>
                <li>service</li>
            </ul>
            <Link to="/about"><button className='bg-purple-500 text-xl text-white py-3 px-8 rounded-md'>About</button></Link>
        </div>
    )
}

export default About