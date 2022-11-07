import React, {useEffect} from 'react';
import {menuList} from "../menu/menu";
import {useNavigate, useLocation} from 'react-router-dom';
import {Layout, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getActiveUrl} from '../store/actions/placeOrderActions';

const {Sider} = Layout;

const Sidebar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const menuData = [...menuList]
    const location = useLocation()
    const {activeUrl} = useSelector((state) => state.placeOrder)

    useEffect(() => {
        dispatch(getActiveUrl(location.pathname))
    }, [])

    const getMenuList = (menuList) => {
        return menuList.map(item => {
            const menuItem = (
                <div role='button' onClick={() => navigate(item.path)} style={{display: 'flex', alignItems: 'center'}}>
                    <i className={item.icon} style={{fontSize: 20, marginRight: 15}}/>
                    <span className='menu-item-name'>{item.name}</span>
                </div>
            )
            return <Menu.Item key={item.id} style={{height: 50}} active={(activeUrl === item.path).toString()}>{menuItem}</Menu.Item>
        })
    }

    return (
        <div className="sidebar" style={{height: 'calc(100vh - 70px)'}}>
            <Sider trigger={null} className="left-side-menu" style={{height: "100%", background: "#ffffff"}} width={263}>
                <Menu theme="light" mode='inline' style={{paddingTop: 54, paddingLeft: 30}}>
                    {getMenuList(menuData)}
                </Menu>
            </Sider>
        </div>
    )
}

export default Sidebar;