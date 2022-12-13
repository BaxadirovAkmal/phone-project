import React, {useEffect} from 'react';
import CBreadCrumb from "./CBreadCrumb";
import {useNavigate} from 'react-router-dom';
import {Input, Row, Col, Card, Pagination, Form, Button, Empty} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts, getSearchedItems} from "../store/slices/placeOrderSlice";
import {changePageHandler} from '../store/actions/placeOrderActions';
import {setProductToMoreDetails} from "../store/actions/productDetailsActions";

let time;
const PlaceOrder = () => {
    const {placeOrderList, paginationData} = useSelector((state) => state.placeOrder)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const searchValue = Form.useWatch('search', form);

    useEffect(() => {
        dispatch(getAllProducts({
            limit: paginationData.limit,
            skip: paginationData.start
        }))
    }, [paginationData, dispatch])

    const onSearch = () => {
        clearTimeout(time)
        time = setTimeout(() => {
            dispatch(getSearchedItems({
                q: searchValue,
                limit: paginationData.limit,
                skip: paginationData.start
            }))
        }, 400)
    }

    useEffect(() => {
        if (searchValue) onSearch()
    }, [searchValue])



    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className='place-order-title-wr'>
                <div className='place-order-box'>
                    <CBreadCrumb crumbs={['Заявки', 'Оформить заказ']}/>
                    <div className='place-order-title'>
                        Оформить заказ
                    </div>
                    <Form
                        name="search"
                        autoComplete="off"
                        form={form}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        className='search-form'
                    >
                        <Form.Item style={{width: '100%'}} name='search'>
                            <Input placeholder="Поиск по названию товара" size="large"/>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType='submit' className='search-button'>
                                <i className='icon-Iconly-Light-Outline-Search'/>
                            </Button>
                        </Form.Item>
                    </Form>
                    <div style={{fontWeight: 600, fontSize: 16, marginBottom: 20, marginTop: 30}}>Все товары ({placeOrderList.total})</div>
                    <Row gutter={16}>
                        {(placeOrderList?.products || []).map((item) => (
                            <Col className="gutter-row" key={item.id} style={{width: '20%'}}>
                                <Card role='button' className='place-order-card'
                                      title={<div className='card-img-box'
                                                  onClick={() => {dispatch(setProductToMoreDetails(item)); navigate(`view/${item.id}`)}}
                                      >
                                          <img src={item.thumbnail} alt="images"/>
                                          <div className='card-bundle-box'>
                                              <div className='first-bundle'>
                                                  <i className='icon-icon-bundle'/>
                                              </div>
                                              <div className='second-bundle'>
                                                  <i className='icon-icon-'/>
                                              </div>
                                          </div>
                                      </div>}>
                                    <p className='card-item-title'>{item.title}</p>
                                    <p className='card-item-price'>{`${item?.price} 000 сум`}</p>
                                    <div className='card-item-sale-price-box'>
                                        <p className='sale-price'>от 2 435 000 сум</p>
                                        <p style={{
                                            fontWeight: 400,
                                            fontSize: '12px',
                                            lineHeight: '13px',
                                            marginBottom: 0
                                        }}>x24</p>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            {placeOrderList.total === 0 && <Empty/>}
                        </div>
                    </Row >
                    <div className='pagination-box'>
                        <Pagination
                            {...placeOrderList.paginationData}
                            total={placeOrderList.total}
                            onChange={(page, pageSize) => {
                                const start = page * pageSize - pageSize
                                dispatch(changePageHandler({
                                    current: page,
                                    start: start,
                                    limit: pageSize,
                                    pageSize: pageSize
                                }))
                            }}
                            showSizeChanger={false}
                            defaultCurrent={1}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlaceOrder;