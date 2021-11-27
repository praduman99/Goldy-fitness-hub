import { Col, Drawer, Image, Row } from 'antd';
import React, { useState, useEffect } from 'react'
import { MenuOutlined, HomeFilled } from '@ant-design/icons';
import { div } from 'react-router-dom';
import Authentication_page from '../Authentication/Authentication_page';
import logo from '../assets/images/logo.png'
import {
    Link
} from 'react-router-dom';


// navbar styling
const navitems = {
    color: "black",
    fontFamily: "Helvetica",
    lineHeight: "3rem",
    fontWeight: "bold"

}


const dropdownmenu = {
    padding: "1rem",
    fontSize: "20px",

}

const Navbar = (props) => {
    const [drawer, setDrawer] = useState(false);

    const [drawer_Authentication, setDrawer_Authentication] = useState(props.open)

    const [drawer_Explore, setDrawer_Explore] = useState(false)

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    // get window dimensions
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }



    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const onClose = () => {
        setDrawer(false);

    };
    const onClose_Authentication = () => {
        setDrawer_Authentication(false)
    }
    const onClose_Explore = () => {
        setDrawer_Explore(false)
    }


    return (

        <div>
            <Row style={{ margin: 0, padding: "10px 10px 0px 10px", position: "fixed", width: "100%", zIndex: "999", background: "white", marginBottom: "2rem" }}>
                <Col span={4}>
                 
           <Image src={logo} width='150px' height='50px' />
                    
                </Col>
                {windowDimensions.width >= 720 ?
                    <Col span={20}>
                        <Row>
                            <Col span={3} >
                                <Link to='/' style={navitems} >Home</Link>
                            </Col>
                            <Col span={3} >
                                <div style={navitems} onClick={() => setDrawer_Explore(true)}>Explore</div>
                            </Col>
                            <Col span={3} >
                                <Link to='Categories' style={navitems} >online gym</Link>
                            </Col>
                            <Col span={3} >
                                <Link to='' style={navitems} >Champianships</Link>
                            </Col>
                            <Col span={3} >
                                <Link to='/About' style={navitems}>About</Link>
                            </Col>
                            <Col span={6} style={{ textAlign: "Right" }}>
                                <div style={navitems} onClick={() => setDrawer_Authentication(true)}>Login/Signup</div>
                            </Col>
                        </Row>
                    </Col>
                    :
                    <Col span={20} style={{ paddingLeft: "15rem" }}><MenuOutlined  onClick={() => { setDrawer(true) }} style={{ fontSize: "2rem", color: 'black' }}></MenuOutlined></Col>
                }

            </Row>
            <Drawer

                visible={drawer}
                placement={'bottom'}

                width={"100%"}
                height={"auto"}
                onClose={onClose}
                closeIcon={false}
                style={{ textAlign: "center" }}
                bodyStyle={{ backgroundColor: 'white' }}

            >
                <div style={{ textAlign: "center", marginTop: "0rem" }}>
                    <Col style={dropdownmenu}>
                        <Link to='/' onClick={() => setDrawer(false)} style={navitems} >Home</Link>
                    </Col>
                    <Col style={dropdownmenu}>
                        <div onClick={() => { setDrawer_Explore(true); setDrawer(false) }} style={navitems} >Explore</div>
                    </Col>
                    <Col style={dropdownmenu}>
                        <Link to='/Categories' onClick={() => setDrawer(false)} style={navitems}>Categories</Link>
                    </Col>
                    <Col style={dropdownmenu}>
                        <div onClick={() => setDrawer(false)} style={navitems}>Become a Seller</div>
                    </Col>
                    <Col style={dropdownmenu}>
                        <Link to='/About' onClick={() => setDrawer(false)} style={navitems} >About</Link></Col>
                    <Col style={dropdownmenu}>
                        <div onClick={() => { setDrawer_Authentication(true); setDrawer(false) }} style={navitems} >Login/Signup</div>
                    </Col>
                </div>
            </Drawer>
            <Drawer
                placement={'right'}
                onClose={onClose_Authentication}
                visible={drawer_Authentication}
                width={windowDimensions.width >= 720 ? "30%" : "100%"}
                height={"auto"}
            >
                <Authentication_page />

            </Drawer>
            <Drawer
                placement={'bottom'}
                onClose={onClose_Explore}
                visible={drawer_Explore}
                width={"auto"}

                height={windowDimensions.width >= 720 ? "80%" : "100%"}
            >


            </Drawer>

        </div>
    )
}

export default Navbar
