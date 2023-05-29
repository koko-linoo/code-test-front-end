import { Outlet } from "react-router-dom";
import PageHeader from "@components/header";
import PageFooter from "@components/footer";
import '@assets/css/tailwind.css'

export default function PublicLayout() {
    return (
        <div>
            <PageHeader />
            <Outlet />
            <PageFooter />
        </div>
    )
}
