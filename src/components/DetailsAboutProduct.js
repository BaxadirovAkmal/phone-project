import React, {useEffect} from 'react';
import CBreadCrumb from "./CBreadCrumb";
import {useDispatch, useSelector} from "react-redux";
import {Tabs, Carousel, Button} from 'antd';
import {getSelectedProduct} from '../store/slices/productDetailSlice';
import {useParams} from 'react-router-dom';

const DetailsAboutProduct = () => {
    const {selectedProduct} = useSelector((state) => state.productDetails)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSelectedProduct(id))
    }, [])

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <>
            <div className='details-about-product-wr'>
                <CBreadCrumb crumbs={['Заявки', 'Оформить заказ']}/>
                <div className='product-box'>
                    <div className='product-title-box'>
                        <p className='title'>{`${selectedProduct?.brand} ${selectedProduct?.title}`}</p>
                        <div className='buy-basket-overlay'>
                            <div className='buy-basket'>
                                <div className="icon-box">
                                    <i className='icon-Iconly-Light-Outline-Buy'/>
                                </div>
                                <div className='buy-basket-title-box'>
                                    <p className='title'>Перейти в корзину</p>
                                    <div className='item-count'>1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '100%', display: 'flex'}}>
                        <div style={{width: '34%'}}>
                            <Carousel afterChange={onChange}>
                                <div>
                                    <div className='carousel-img-wr'>
                                        <div className='carousel-img-item'>
                                            <img src={selectedProduct?.thumbnail} alt="product"/>
                                        </div>
                                        <div className='product-bundle-box'>
                                            <div className='bundle-box-item'
                                                 style={{background: '#F39DBD', color: '#E83274'}}><i
                                                className='icon-icon-trade-in'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#A2AEDB', color: '#3855B3'}}><i
                                                className='icon-icon-bundle'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#FFBD95', color: '#FF6422'}}><i
                                                className='icon-icon-'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#AAD9AC', color: '#4CAF50'}}><i
                                                className='icon-icon-'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='carousel-img-wr'>
                                        <div className='carousel-img-item'>
                                            <img src={selectedProduct?.thumbnail} alt="product"/>
                                        </div>
                                        <div className='product-bundle-box'>
                                            <div className='bundle-box-item'
                                                 style={{background: '#F39DBD', color: '#E83274'}}><i
                                                className='icon-icon-trade-in'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#A2AEDB', color: '#3855B3'}}><i
                                                className='icon-icon-bundle'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#FFBD95', color: '#FF6422'}}><i
                                                className='icon-icon-'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#AAD9AC', color: '#4CAF50'}}><i
                                                className='icon-icon-'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='carousel-img-wr'>
                                        <div className='carousel-img-item'>
                                            <img src={selectedProduct?.thumbnail} alt="product"/>
                                        </div>
                                        <div className='product-bundle-box'>
                                            <div className='bundle-box-item'
                                                 style={{background: '#F39DBD', color: '#E83274'}}><i
                                                className='icon-icon-trade-in'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#A2AEDB', color: '#3855B3'}}><i
                                                className='icon-icon-bundle'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#FFBD95', color: '#FF6422'}}><i
                                                className='icon-icon-'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#AAD9AC', color: '#4CAF50'}}><i
                                                className='icon-icon-'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='carousel-img-wr'>
                                        <div className='carousel-img-item'>
                                            <img src={selectedProduct?.thumbnail} alt="product"/>
                                        </div>
                                        <div className='product-bundle-box'>
                                            <div className='bundle-box-item'
                                                 style={{background: '#F39DBD', color: '#E83274'}}><i
                                                className='icon-icon-trade-in'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#A2AEDB', color: '#3855B3'}}><i
                                                className='icon-icon-bundle'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#FFBD95', color: '#FF6422'}}><i
                                                className='icon-icon-'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#AAD9AC', color: '#4CAF50'}}><i
                                                className='icon-icon-'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='carousel-img-wr'>
                                        <div className='carousel-img-item'>
                                            <img src={selectedProduct?.thumbnail} alt="product"/>
                                        </div>
                                        <div className='product-bundle-box'>
                                            <div className='bundle-box-item'
                                                 style={{background: '#F39DBD', color: '#E83274'}}><i
                                                className='icon-icon-trade-in'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#A2AEDB', color: '#3855B3'}}><i
                                                className='icon-icon-bundle'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#FFBD95', color: '#FF6422'}}><i
                                                className='icon-icon-'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#AAD9AC', color: '#4CAF50'}}><i
                                                className='icon-icon-'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='carousel-img-wr'>
                                        <div className='carousel-img-item'>
                                            <img src={selectedProduct?.thumbnail} alt="product"/>
                                        </div>
                                        <div className='product-bundle-box'>
                                            <div className='bundle-box-item'
                                                 style={{background: '#F39DBD', color: '#E83274'}}><i
                                                className='icon-icon-trade-in'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#A2AEDB', color: '#3855B3'}}><i
                                                className='icon-icon-bundle'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#FFBD95', color: '#FF6422'}}><i
                                                className='icon-icon-'/></div>
                                            <div className='bundle-box-item'
                                                 style={{background: '#AAD9AC', color: '#4CAF50'}}><i
                                                className='icon-icon-'/></div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                        <div style={{width: '66%', paddingLeft: '20px'}}>
                            <p style={{
                                color: '#BBC2D0',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '19px',
                                marginBottom: '8px'
                            }}>Цена телефона</p>
                            <p className='product-price'>6 000 000 сум</p>

                            <div className='price-detail-box'>
                                <p style={{
                                    color: '#BBC2D0',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '19px',
                                    marginBottom: '8px'
                                }}>Общая цена (с наценкой)</p>
                                <div className='markup-box'>
                                    <p className='markup-box-price'>7 300 000 сум</p>
                                    <div className='payment-price-box'>
                                        <p className='payment-price'>2 433 333 сум</p>
                                        <p className='monthly-amount'>x3</p>
                                    </div>
                                </div>
                                <Tabs defaultActiveKey="1">
                                    <Tabs.TabPane tab="3 мес" key="1">
                                        <p className='tab-markup-price'>Наценка: <span
                                            className='price-percentage'>5%</span></p>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="6 мес" key="2">
                                        <p className='tab-markup-price'>Наценка: <span
                                            className='price-percentage'>10%</span></p>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="12 мес" key="3">
                                        <p className='tab-markup-price'>Наценка: <span
                                            className='price-percentage'>15%</span></p>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="24 мес" key="4">
                                        <p className='tab-markup-price'>Наценка: <span
                                            className='price-percentage'>20%</span></p>
                                    </Tabs.TabPane>
                                </Tabs>
                                <div className='general-information'>
                                    <p className='information-title'>Общие характеристики</p>
                                    <p className='title'>Тип: моноблок (классический)</p>
                                    <p className='title'>Стандарт: 2G, 3G, 4G (LTE), 5G</p>
                                    <p className='title'>Операционная система: iOS 14</p>
                                </div>
                                <p style={{marginBottom: 0, marginTop: '10px', color: '#00C48C'}}>Показать все</p>
                            </div>
                        </div>
                    </div>
                    <div className='general-information-selection-box'>
                        <p className='title'>Акции</p>
                        <div className='selection-box'>
                            <div className='top-selection-box'>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div className='icon-box'>
                                        <i className='icon-icon-trade-in'/>
                                    </div>
                                    <p className='top-selection-box-title'>Обменяй свой старый айфон и получи скидку на
                                        новый</p>
                                </div>
                                <div className='custom-checkbox'>
                                    <input type="checkbox" name="product"/>
                                </div>
                            </div>
                            <p style={{marginLeft: '55px', marginTop: '-7px', color: '#BBC2D0'}}>- 400 000 сум</p>
                        </div>
                        <div className='selection-box'>
                            <div className='top-selection-box'>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div className='icon-box' style={{background: '#A2AEDB'}}>
                                        <i className='icon-icon-bundle' style={{color: '#3855B3'}}/>
                                    </div>
                                    <p className='top-selection-box-title'>Наушники в подарок</p>
                                </div>
                                <div className='custom-checkbox'>
                                    <input type="checkbox" name="product"/>
                                </div>
                            </div>
                            <p style={{marginLeft: '55px', marginTop: '-7px', color: '#BBC2D0'}}>Apple EarPods</p>
                        </div>
                        <div className='selection-box'>
                            <div className='top-selection-box'>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div className='icon-box' style={{background: '#FFBD95'}}>
                                        <i className='icon-icon-' style={{color: '#FF6422'}}/>
                                    </div>
                                    <p className='top-selection-box-title'>Скидка 20% на смартфоны</p>
                                </div>
                                <div className='custom-checkbox'>
                                    <input type="checkbox" name="product"/>
                                </div>
                            </div>
                            <p style={{marginLeft: '55px', marginTop: '-7px', color: '#BBC2D0'}}>- 10 000 сум</p>
                        </div>
                        <div className='selection-box'>
                            <div className='top-selection-box'>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div className='icon-box' style={{background: '#AAD9AC'}}>
                                        <i className='icon-icon-' style={{color: '#4CAF50'}}/>
                                    </div>
                                    <p className='top-selection-box-title'>Скидка на айфоны</p>
                                </div>
                                <div className='custom-checkbox'>
                                    <input type="checkbox" name="product"/>
                                </div>
                            </div>
                            <p style={{marginLeft: '55px', fontWeight: 400, fontSize: '15px', lineHeight: '17px'}}>IMEI
                                012345678901234</p>
                            <p style={{marginLeft: '55px', marginTop: '-7px', color: '#BBC2D0'}}>- 10 000 сум</p>
                        </div>
                        <div style={{marginTop: '30px', height: '52px'}}>
                            <Button type="default" className='selection-box-btn'>
                                Добавить в корзину
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsAboutProduct;
