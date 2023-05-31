import ProLayout from "@ant-design/pro-layout";
import Loading from "@components/commons/loading";
import { AuthStore, useAuthStore } from "@hooks/auth";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { defaultProps, proSettings } from "./defaultProps";
import { ConfigProvider } from "antd";
import enUs from 'antd/locale/en_US';

export default function Dashboard() {
    const location = useLocation();

    const authState = useAuthStore((state: AuthStore) => state);

    useEffect(() => {
        authState.initialize();
    }, [])

    if (authState.auth.loading) return (
        <div className="h-screen flex items-center justify-center">
            <Loading />
        </div>
    )

    if (!authState.auth.user) return <Navigate to="/login" state={{ from: location.pathname }} />;

    return (
        <div className="w-screen h-screen">
            <ConfigProvider locale={enUs}>
                <ProLayout
                    avatarProps={{
                        size: 'small',
                        title: authState.auth.user?.username,
                    }}
                    location={location}
                    style={{ minHeight: '100vh' }}
                    {...defaultProps}
                    {...proSettings}
                >
                    <div className="w-full">
                        <Outlet />
                    </div>
                </ProLayout>
            </ConfigProvider>
        </div>
    )
}
