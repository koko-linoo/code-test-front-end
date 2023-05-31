import { Button, Form, Input, Layout } from 'antd';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthStore, useAuthStore } from '@hooks/auth'
import { useEffect } from 'react';
import Loading from '@components/commons/loading';

export default function Login() {
    const authState = useAuthStore((state: AuthStore) => state);
    const location = useLocation();

    function onSubmit(formData: any) {
        authState.login(formData);
    }

    useEffect(() => {
        authState.initialize();
    }, [])

    if (authState.auth.loading) return (
        <div className="h-screen flex items-center justify-center">
            <Loading />
        </div>
    )

    if (authState.auth.user) return <Navigate to={location.state?.from ?? "/dashboard"} replace />;

    return (
        <Layout
            style={{
                display: 'flex',
                minHeight: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Layout.Content style={{ width: 400, flex: 'none' }}>
                <Form onFinish={onSubmit} labelCol={{ sm: 6 }}>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'User Name is Required!',
                            },
                        ]}
                    >
                        <Input placeholder='User Name' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Password is Required!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Password' />
                    </Form.Item>
                    <Form.Item >
                        <Button className='bg-blue-500 w-full' htmlType="submit" type="primary">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Layout.Content>
        </Layout>
    );
}
