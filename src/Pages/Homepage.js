import React from 'react'
import { Carousel, Image, Row, Col,Divider } from 'antd';
import 'animate.css';
import img2 from '../assets/images/img2.jpg'

import img4 from '../assets/images/img4.jpg'

import img5 from '../assets/images/img5.jpg'
import img3 from '../assets/images/img3.jpg'

import img6 from '../assets/images/img6.jpg'
import goldysir from '../assets/images/goldysir.jpeg'

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
                {/* <Carousel autoplay style={{ width: "100%" }} pauseOnHover={false} dots={false}>

                    {[img2, img4, img5, img6].map((img, indx) => {
                        return (<div key={indx} style={{ top: 0, left: 0, background: 'black', opacity: ".5" }}>
                            <Image src={img} preview={false} height='auto' width="100%" style={{ position: "center" }} />
                        </div>)
                    })}

                </Carousel> */}
                <div className="Header_Container">
                <Row justify="center">
                                <div>
                                    <h1 className="Header_heading"> Be Stronger Than Your Excuse !</h1>
                                    <Divider type="horizontal" style={{ color: "darkorange", fontWeight: "900", fontSize: "2rem" }}>___________</Divider>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <p className="Heading_Text" >Affordable Best Freelance Music Producer & Composer and many more Services. Hire a Best Music Frelancer today and get your dreams true by making creating music projects.</p>
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
                    <Row justify={'center'}>
                        <Col>
                            <Card
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
                        <Col>
                            <Card
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
                    <Row>

                        <h1>
                            Students
                        </h1>
                    </Row>
                </div>

            </div>
        </div>
    )
}

export default Homepage
