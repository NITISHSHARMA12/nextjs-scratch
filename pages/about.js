import React from 'react';
import Link from 'next/link';
import Layout from '../Components/Layout';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        console.log("propsAbouts",this.props)
        return (
            <Layout title="About Us" {...this.props}>
                <div className="container-fluid top-space">

                    <Link href="/index">
                        <a>Home</a>
                    </Link>

                    <h1>About Us</h1>

                </div>
            </Layout>
        );
    }
}

export default About;