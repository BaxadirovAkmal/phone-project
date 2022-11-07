import React from 'react';
import {Layout, Badge} from 'antd';
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Orders from '../Orders';
import Products from "../Products";
import Reviews from "../Reviews";
import Sidebar from "../Sidebar";
import Checkout from './Checkout';
const {Content} = Layout;


const MainLayout = () => {
    return (
        <div style={{width: '100%', height: '100vh', overflow: 'hidden'}}>
            <div
                className="site-layout-header"
                style={{
                    padding: 0,
                }}
            >
                <div className="logo">
                    <p style={{margin: 0}}>LOGO</p>
                </div>
                <div className="header-right">
                    <div className="notification-box">
                        <Badge count={1} style={{
                            backgroundColor: '#52c41a',
                        }}>
                            <i className='icon-Iconly-Bold-Notification'/>
                        </Badge>
                    </div>
                    <div className="user-profile">
                        <div className='profile-inner-box'>
                            <div className='profile-title'>Личный кабинет</div>
                            <div className='profile-avatar'>
                                <i className="icon-user"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-wr'>
                <Layout className="main-layout-wr">
                    <Sidebar/>
                    <Layout className="layout-content-wr">
                        <Content>
                            <Routes>
                                <Route path='/' element={<Dashboard/>}/>
                                <Route path='/orders' element={<Orders/>}/>
                                <Route path='/products' element={<Products/>}/>
                                <Route path='/reviews' element={<Reviews/>}/>
                                <Route path='/place-order/*' element={<Checkout/>}/>
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
}

export default MainLayout;