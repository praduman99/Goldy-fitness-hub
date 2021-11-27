import React from 'react'
import { Carousel, Image, Row, Col,Divider } from 'antd';
import 'animate.css';
import img2 from '../assets/images/img2.jpg'

import img4 from '../assets/images/img4.jpg'

import img5 from '../assets/images/img5.jpg'
import img3 from '../assets/images/img3.jpg'

import img6 from '../assets/images/img6.jpg'
import banner from '../assets/images/banner.png'
import goldysir from '../assets/images/goldysir.jpeg'
import simg1 from '../assets/images/students/1.jpeg'
import simg2 from '../assets/images/students/2.jpeg'
import simg3 from '../assets/images/students/3.jpeg'
import simg4 from '../assets/images/students/4.jpeg'
import simg5 from '../assets/images/students/5.jpeg'
import simg6 from '../assets/images/students/6.jpeg'


import Rohitsir from '../assets/images/rohitsir.png'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import './style.css'


const { Meta } = Card;
const Homepage = () => {


    const contentStyle = {
        color: '#fff',

        textAlign: 'center',
        background: '#364d79',
        position: "absolute"
    };
    return (
        <div>
            <div>
                <h3 style={contentStyle}>RV-FITNESS</h3>
                
                <div className="Header_Container">
                <Row justify="center">
                                <div>
                                    <h1 className="Header_heading animate__animated animate__bounceInUp"> Be Stronger Than Your Excuse !</h1>
                                    <Divider type="horizontal" style={{ color: "darkorange", fontWeight: "900", fontSize: "2rem" }}>___________</Divider>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <p className="Heading_Text  animate__animated animate__bounceInDown" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
                                    </div>
                                    <div style={{ textAlign: "center", paddingBottom: "10rem" }}>
                                        {/* <Link to="Categories">
                                            <button className="Heading_Button"
                                            >Start You search Now ! </button>
                                        </Link> */}
                                    </div>
                                </div>
                            </Row>
                </div>
                {/* <Image src={img5} className="Header_Container"  width={'100%'}/> */}
            </div>
            <div>
                <h1 style={{ animation: "animate__bounceInLeft", textAlign: 'center' }}>Trainers</h1>
                <div>
                    <Row justify={'center'} gutter={50}>
                        <Col  className="animate__animated animate__backInRight ">
                            <Card
                            className=" animate__animated animate__pulse"
                                style={{ width: '18rem' }}
                                cover={
                                    <img
                                        alt="example"
                                        src={goldysir}
                                    />
                                }
                                actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={goldysir} />}
                                    title="Goldy"
                                    description="This is the description"
                                />
                            </Card>,
                        </Col>
                        <Col className="animate__animated animate__backInLeft ">
                            <Card
                              className=" animate__animated animate__pulse"
                                style={{ width: '18rem' }}
                                cover={
                                    <img
                                        alt="example"
                                        src={Rohitsir}
                                    />
                                }
                                actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={Rohitsir} />}
                                    title="Rohit"
                                    description="This is the description"
                                />
                            </Card>
                        </Col>

                    </Row>
                    <Row justify="center" >
                    
    
                        <h1 className="hompage_jmbotron">One Day or Day One You decide   </h1>

                    </Row>
                    <h1 style={{textAlign:'center'}} className="animate__animated animate__bounceIn animate__infinite	infinite">
                         Our Online Programs
                        </h1>
                    <Row gutter={20}justify={'center'}>

                                   
                       
                       
                        <Col span={18}>
                        {/* <Carousel autoplay pauseOnHover={false} dots={false}>

                    {[simg1,simg2,simg3,simg4,simg5,simg6].map((img, indx) => {
                        return (<div key={indx} style={{ top: 0, left: 0, background: 'black', opacity: ".5" }}>
                            <Image src={img} preview={false} height='auto' width="100%" style={{ position: "center" }} />
                        </div>)
                    })}

                </Carousel> */}
                <Image src={banner} />
                </Col>
                    </Row>
                    <h1 style={{textAlign:'center'}} className="animate__animated  animate__infinite	infinite">
                          Some Of Trained  Students
                        </h1>
                    <Row gutter={20}justify={'center'}>

                                   
                       
                       
                        <Col span={18}>
                            
                        <Carousel autoplay pauseOnHover={false} dots={false}>

                    {[simg1,simg2,simg3,simg4,simg5,simg6].map((img, indx) => {
                        return (<div key={indx} style={{ top: 0, left: 0, background: 'black', opacity: ".5" }}>
                            <Image src={img} preview={false} height='auto' width="100%" style={{ position: "center" }} />
                        </div>)
                    })}

                </Carousel>
                </Col>
                    </Row>
                 
                </div>

            </div>
        </div>
    )
}

export default Homepage
