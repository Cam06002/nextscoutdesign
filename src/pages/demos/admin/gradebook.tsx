import type {NextPage} from "next";
import dynamic from "next/dynamic";
import React from "react";

const App = dynamic(() => import("../admin/app"), {ssr: false});

    const Admin: NextPage = () => {
        return <App/>;
    };

export default Admin;