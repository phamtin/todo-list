import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, Col } from 'antd';

import { addItem, editItem } from '../../redux/items/item.action';
import './modal.scss';

const Modal = ({
  isEdit,
  content,
  show,
  clicked,
  addNewItem,
  isAuth,
  token,
  onEditItem,
}) => {
  const [heading, setHeading] = useState('');
  const [detail, setDetail] = useState('');

  useEffect(() => {
    const { heading, detail } = content;
    setHeading(heading);
    setDetail(detail);
  }, [content]);

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const buttonLayout = {
    wrapperCol: {
      offset: 5,
      span: 16,
    },
  };

  const onHandleInput = e => {
    if (e.target.name === 'heading') {
      setHeading(e.target.value);
    } else if (e.target.name === 'detail') {
      setDetail(e.target.value);
    }
  };

  const onSubmitForm = values => {
    const item = { heading, detail };
    if (isEdit) {
      const { _id } = content;
      clicked();
      setDetail('');
      setHeading('');
      return onEditItem(token, _id, item);
    }
    addNewItem(token, item);
    clicked();
    setDetail('');
    setHeading('');
  };

  return (
    <div className={`modal ${show ? 'modal__show' : 'modal__hide'}`}>
      {isAuth ? null : <Redirect to="/login" />}
      <Col offset={5}>
        <p>Add new stuff</p>
      </Col>
      <Form {...layout} onFinish={onSubmitForm}>
        <Form.Item
          label="Heading"
          rules={[
            {
              required: true,
              message: 'Please input heading!',
            },
          ]}
        >
          <Input
            onChange={onHandleInput}
            value={heading}
            name="heading"
            required
          />
        </Form.Item>
        <Form.Item label="Detail">
          <Input name="detail" value={detail} onChange={onHandleInput} />
        </Form.Item>

        <Form.Item {...buttonLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
  isAuth: state.auth.token != null,
  isEdit: state.items.isEditMode,
});

const mapDispatchToProps = dispatch => ({
  addNewItem: (token, item) => dispatch(addItem(token, item)),
  onEditItem: (token, idItem, item) => dispatch(editItem(token, idItem, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
