import React from 'react';
import CBreadCrumb from '../components/CBreadCrumb';
import {Card, Col, Row} from "antd";

function Dashboard() {
    return (
        <div className='dashboard place-order-title-wr'>
            <CBreadCrumb title='Главная'/>
            <div className='place-order-box'>
                <Row gutter={16} className='order-box-right'>
                    <Col className="gutter-row" style={{width: '20%'}}>
                        <Card className='place-order-card'>
                            <div className='card-img-box'>
                                <img src={require('../images/samsung.png')} alt=""/>
                                <div className='card-bundle-box'>
                                    <div className='first-bundle'>
                                        <i className='icon-icon-bundle'/>
                                    </div>
                                    <div className='second-bundle'>
                                        <i className='icon-icon-'/>
                                    </div>
                                </div>
                            </div>
                            <p className='card-item-title'>Смартфон Samsung G...</p>
                            <p className='card-item-price'>7 300 000 сум</p>
                            <div className='card-item-sale-price-box'>
                                <p className='sale-price'>от 2 435 000 сум</p>
                                <p style={{fontWeight: 400, fontSize: '12px', lineHeight: '13px', marginBottom: 0}}>x24</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" style={{width: '20%'}}>
                        <Card className='place-order-card'>
                            <div className='card-img-box'>
                                <img src={require('../images/iphone.png')} alt=""/>
                                <div className='card-bundle-box'>
                                    <div className='first-bundle' style={{background: '#F39DBD', color: '#E83274'}}>
                                        <i className='icon-icon-trade-in'/>
                                    </div>
                                </div>
                            </div>
                            <p className='card-item-title'>Смартфон Apple iphon...</p>
                            <p className='card-item-price'>7 300 000 сум</p>
                            <div className='card-item-sale-price-box'>
                                <p className='sale-price'>от 2 435 000 сум</p>
                                <p style={{fontWeight: 400, fontSize: '12px', lineHeight: '13px', marginBottom: 0}}>x24</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" style={{width: '20%'}}>
                        <Card className='place-order-card'>
                            <div className='card-img-box'>
                                <img src={require('../images/airpods.png')} alt=""/>
                                <div className='card-bundle-box'>
                                    <div className='first-bundle' style={{background: '#F39DBD', color: '#E83274'}}>
                                        <i className='icon-icon-trade-in'/>
                                    </div>
                                </div>
                            </div>
                            <p className='card-item-title'>Наушники Apple Airpo...</p>
                            <p className='card-item-price'>7 300 000 сум</p>
                            <div className='card-item-sale-price-box'>
                                <p className='sale-price'>от 2 435 000 сум</p>
                                <p style={{fontWeight: 400, fontSize: '12px', lineHeight: '13px', marginBottom: 0}}>x24</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" style={{width: '20%'}}>
                        <Card className='place-order-card'>
                            <div className='card-img-box'>
                                <img src={require('../images/galaxyZ.png')} alt=""/>
                                <div className='card-bundle-box'>
                                    <div className='first-bundle'>
                                        <i className='icon-icon-bundle'/>
                                    </div>
                                    <div className='second-bundle'>
                                        <i className='icon-icon-'/>
                                    </div>
                                </div>
                            </div>
                            <p className='card-item-title'>Samsung Galaxy Z Fold...</p>
                            <p className='card-item-price'>7 300 000 сум</p>
                            <div className='card-item-sale-price-box'>
                                <p className='sale-price'>от 2 435 000 сум</p>
                                <p style={{fontWeight: 400, fontSize: '12px', lineHeight: '13px', marginBottom: 0}}>x24</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" style={{width: '20%'}}>
                        <Card className='place-order-card'>
                            <div className='card-img-box'>
                                <img src={require('../images/iphone.png')} alt=""/>
                                <div className='card-bundle-box'>
                                    <div className='first-bundle' style={{background: '#F39DBD', color: '#E83274'}}>
                                        <i className='icon-icon-trade-in'/>
                                    </div>
                                </div>
                            </div>
                            <p className='card-item-title'>Смартфон Apple iphon...</p>
                            <p className='card-item-price'>7 300 000 сум</p>
                            <div className='card-item-sale-price-box'>
                                <p className='sale-price'>от 2 435 000 сум</p>
                                <p style={{fontWeight: 400, fontSize: '12px', lineHeight: '13px', marginBottom: 0}}>x24</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" style={{width: '20%'}}>
                        <Card className='place-order-card'>
                            <div className='card-img-box'>
                                <img src={require('../images/samsung.png')} alt=""/>
                                <div className='card-bundle-box'>
                                    <div className='first-bundle'>
                                        <i className='icon-icon-bundle'/>
                                    </div>
                                    <div className='second-bundle'>
                                        <i className='icon-icon-'/>
                                    </div>
                                </div>
                            </div>
                            <p className='card-item-title'>Смартфон Samsung G...</p>
                            <p className='card-item-price'>7 300 000 сум</p>
                            <div className='card-item-sale-price-box'>
                                <p className='sale-price'>от 2 435 000 сум</p>
                                <p style={{fontWeight: 400, fontSize: '12px', lineHeight: '13px', marginBottom: 0}}>x24</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" style={{width: '20%'}}>
                        <Card className='place-order-card'>
                            <div className='card-img-box'>
                                <img src={require('../images/iphone.png')} alt=""/>
                                <div className='card-bundle-box'>
                                    <div className='first-bundle' style={{background: '#F39DBD', color: '#E83274'}}>
                                        <i className='icon-icon-trade-in'/>
                                    </div>
                                </div>
                            </div>
                            <p className='card-item-title'>Смартфон Apple iphon...</p>
                            <p className='card-item-price'>7 300 000 сум</p>
                            <div className='card-item-sale-price-box'>
                                <p className='sale-price'>от 2 435 000 сум</p>
                                <p style={{fontWeight: 400, fontSize: '12px', lineHeight: '13px', marginBottom: 0}}>x24</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" style={{width: '20%'}}>
                        <Card className='place-order-card'>
                            <div className='card-img-box'>
                                <img src={require('../images/airpods.png')} alt=""/>
                                <div className='card-bundle-box'>
                                    <div className='first-bundle' style={{background: '#F39DBD', color: '#E83274'}}>
                                        <i className='icon-icon-trade-in'/>
                                    </div>
                                </div>
                            </div>
                            <p className='card-item-title'>Наушники Apple Airpo...</p>
                            <p className='card-item-price'>7 300 000 сум</p>
                            <div className='card-item-sale-price-box'>
                                <p className='sale-price'>от 2 435 000 сум</p>
                                <p style={{fontWeight: 400, fontSize: '12px', lineHeight: '13px', marginBottom: 0}}>x24</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" style={{width: '20%'}}>
                        <Card className='place-order-card'>
                            <div className='card-img-box'>
                                <img src={require('../images/galaxyZ.png')} alt=""/>
                                <div className='card-bundle-box'>
                                    <div className='first-bundle'>
                                        <i className='icon-icon-bundle'/>
                                    </div>
                                    <div className='second-bundle'>
                                        <i className='icon-icon-'/>
                                    </div>
                                </div>
                            </div>
                            <p className='card-item-title'>Samsung Galaxy Z Fold...</p>
                            <p className='card-item-price'>7 300 000 сум</p>
                            <div className='card-item-sale-price-box'>
                                <p className='sale-price'>от 2 435 000 сум</p>
                                <p style={{fontWeight: 400, fontSize: '12px', lineHeight: '13px', marginBottom: 0}}>x24</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" style={{width: '20%'}}>
                        <Card className='place-order-card'>
                            <div className='card-img-box'>
                                <img src={require('../images/iphone.png')} alt=""/>
                                <div className='card-bundle-box'>
                                    <div className='first-bundle' style={{background: '#F39DBD', color: '#E83274'}}>
                                        <i className='icon-icon-trade-in'/>
                                    </div>
                                </div>
                            </div>
                            <p className='card-item-title'>Смартфон Apple iphon...</p>
                            <p className='card-item-price'>7 300 000 сум</p>
                            <div className='card-item-sale-price-box'>
                                <p className='sale-price'>от 2 435 000 сум</p>
                                <p style={{fontWeight: 400, fontSize: '12px', lineHeight: '13px', marginBottom: 0}}>x24</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Dashboard;