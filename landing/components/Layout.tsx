import React from "react";
import Navbar from "~/components/Navbar";
import Footer from "./Footer";

const Layout = ({
    children,
    waitlistCardRef,
}: {
    children: any;
    waitlistCardRef: React.MutableRefObject<any>;
}) => {
    return (
        <div>
            <Navbar waitlistCardRef={waitlistCardRef} />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
