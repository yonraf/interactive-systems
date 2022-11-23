import Faq from 'react-faq-component';
import React from 'react'
import Navbar from './Navbar'

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: "dolor Lorem ipsum dolor sit amet, consectetur "
        },
        {
            title: "Amet lorem ipsum dolor sit amet,",
            content: "Lorem ipsum dolor sit amet, consectetur "
        },
        {
            title: "Sit orem ipsum dolor sit amet,",
            content: "Lorem ipsum dolor sit amet, consectetur "
        },
        {
            title: "duk sorem ipsum dolor sit amet,",
            content: "Lorem ipsum dolor sit amet "
        }]
}


export default function SupportPage() {
    return (
        <header>
            <Navbar></Navbar>
            <div style={{ padding: "15vh" }}>
                <Faq data={data} />
            </div>
        </header>
    )
}
