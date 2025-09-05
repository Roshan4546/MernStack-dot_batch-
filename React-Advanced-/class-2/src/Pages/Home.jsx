import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import PageChange from "../components/PageChange";

function Home() {
    return (
        <div>
            <Header />

            <main className="p-4">
                {/* Show all blogs */}
                <Blogs />

                {/* Pagination */}
                <div className="mt-6">
                    <PageChange />
                </div>
            </main>
        </div>
    );
}

export default Home;
