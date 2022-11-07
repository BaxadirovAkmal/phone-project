import React from 'react';
import { Breadcrumb } from 'antd';

const CBreadCrumb = (props) => {
    console.log('props +++', props)
    return (
        <Breadcrumb separator=">">
            {
                (props.crumbs || []).map((item, index) => (
                    <Breadcrumb.Item key={index} className='custom-bread-crumb'>{item}</Breadcrumb.Item>
                ))
            }
        </Breadcrumb>
    );
}

export default CBreadCrumb;
