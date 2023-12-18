import React, {useEffect} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {login} from "../../data/query/admin/admin.queries";
import {useNavigate} from "react-router";

const onFinish = (values: any) => {
    console.log('Success:', values);
    login(values)
        .then((rs) => {
            localStorage.setItem('ADMIN_TOKEN', rs.accessToken)
        })
        .catch((rs) => {
            console.log(rs)
        })
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    phone?: string;
    password?: string;
    remember?: string;
};

const Auth: React.FC = () => {
    const token = localStorage.getItem('ADMIN_TOKEN')
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            navigate('/admin/user')
        }
    }, [token])
    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Phone"
                name="phone"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{offset: 8, span: 16}}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Auth;