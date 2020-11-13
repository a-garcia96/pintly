import React from 'react';

// IMPORT COMPONENTS
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

//IMPORT CSS
import './Layout.module.css'


const layout = (props) => (
    <div>
        <Navbar />
        <main>
            {props.children}
        </main>
        <Footer />
    </div>
);

export default layout;