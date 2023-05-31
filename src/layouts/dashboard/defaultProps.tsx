import { ProLayoutProps, ProSettings } from "@ant-design/pro-layout";
import {
    PaperClipOutlined,
    ChromeFilled,
    PoweroffOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { AuthStore, useAuthStore } from "@hooks/auth";
import { Button } from "antd";
import { ReactNode } from "react";

import logoImage from '@assets/images/logo.png'

export const defaultProps: Partial<ProLayoutProps> = {
    title: "Dashboard",
    logo: logoImage,
    route: {
        path: '/',
        routes: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                icon: <ChromeFilled />,
            },
            {
                path: '/dashboard/posts',
                name: 'Posts',
                icon: <PaperClipOutlined />,
            },
            {
                path: '/dashboard/category',
                name: 'Categories',
                icon: <PaperClipOutlined />,
            },
            {
                path: '/dashboard/tags',
                name: 'Tags',
                icon: <PaperClipOutlined />,
            },
        ],
    },
    menuItemRender: (item, defaultDom): ReactNode => {
        if (item.children) return defaultDom;
        return (
            <Link to={item.path!} target={item.target}>
                {defaultDom}
            </Link>
        );
    },
    menuFooterRender: (props: any) => <MenuFooter {...props} />,
};

export const MenuFooter = (props: any) => {
    const logout = useAuthStore((state: AuthStore) => state.logout);

    if (props?.collapsed) return <div />;
    return (
        <div
            style={{
                textAlign: 'center',
                paddingBlockStart: 12,
            }}
        >
            <Button type="ghost" icon={<PoweroffOutlined />} onClick={logout}>
                Logout
            </Button>
        </div>
    );
};

export const proSettings: ProSettings = {
    navTheme: 'light',
    layout: 'mix',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorPrimary: '#1677FF',
    splitMenus: false,
    siderMenuType: 'sub',
    colorWeak: false,
}