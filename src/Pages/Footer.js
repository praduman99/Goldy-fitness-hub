import { Row, Layout, Col } from 'antd'
import React from 'react'
import '../Pages/style.css'
import { InstagramFilled, FacebookFilled, TwitterSquareFilled, GithubFilled, GlobalOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const iconstyle = {
    fontSize: "1rem",
    paddingRight: "10px",
    color: "darkgreen"


}
const Footertext = {
    fontSize: "1rem",
    color: "darkgreen",
    textAlign: "center",
    fontWeight: "Bold",
    marginTop: "2rem"

}

const Footer = () => {
    return (
        <div>
       <hr/>
            <Layout style={{background:"white"}}>
                <Row justify="center" >
                    <h1 style={{color:"darkgreen",textDecoration:"underline"}}>RV-Fitness</h1>
                </Row>

                <Row justify="center">
                    <Col span={6} style={Footertext}>
                        Community
                    <div style={{ display: "flex", flexDirection: 'column', color: "black", fontWeight: "400" }}>
                            <span style={{ padding: "5px" }}>Events</span>
                            <span style={{ padding: "5px" }}>Blog</span>
                            <span style={{ padding: "5px" }}>Forums</span>
                            <span style={{ padding: "5px" }}>Podcast</span>


                        </div>
                    </Col>
                    <Col span={6} style={Footertext}>
                        Support
                        <div style={{ display: "flex", flexDirection: 'column', color: "black", fontWeight: "400" }}>
                            <Link to=""><span style={{ padding: "5px",color:"black" }}>Help & Support</span></Link>
                            <span style={{ padding: "5px" }}>Trust & Saftey</span>
                            <span style={{ padding: "5px" }}>Selling</span>


                        </div>
                    </Col>
                    <Col span={6} style={Footertext}>
                        About us
                        <div style={{ display: "flex", flexDirection: 'column', color: "black", fontWeight: "400" }}>
                            <span style={{ padding: "5px" }}>Careers</span>
                            <span style={{ padding: "5px" }}>Partnerships</span>
                            <span style={{ padding: "5px" }}>Privacy policy</span>

                            <span style={{ padding: "5px" }}>Terms & Services</span>


                        </div>
                    </Col>
                </Row>
                <Row justify="center">
                    <p style={{ color: 'black' }}>Freelance International Ltd. 2021</p>
                </Row>
                <Row justify="center">

                    <InstagramFilled style={iconstyle} />
                    <FacebookFilled style={iconstyle} />
                    <TwitterSquareFilled style={iconstyle} />
                    <GithubFilled style={iconstyle} />

                </Row>
                <Row justify="center" style={{ margin: "1rem" }} >
                    <Col>
                        <GlobalOutlined style={{ paddingLeft: "2rem" }} />
                    </Col>
                    <p style={{ color: 'black', paddingRight: "2rem" }}>English</p>

                </Row>
            </Layout>
            {/* <Row style={{ backgroundColor: "darkgrey", height: "3rem" }}></Row> */}
        </div>
    )
}

export default Footer
