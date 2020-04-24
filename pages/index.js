import React from 'react'
import Link from 'next/link'
import Layout from "../Components/Layout";
import { CONTACT_US } from '../constant/apiUrl';
import fetch from "isomorphic-unfetch";

class Index extends React.Component{


    constructor(props){
        super(props);
        this.state={

        }

    }


    render() {
        let {diseases} =this.props;

        return (
            <Layout title="Home" {...this.props}>
                <div className="container-fluid top-space">

                    <Link href="/about">
                        <a>About Us</a>

                    </Link>
                    <h1>home</h1>
                    {/* <ul>
                    {diseases.map(disease => (
                        <li key={disease.id}>
                            {disease.domain}
                        </li>
                    ))}
                    </ul> */}
                </div>
            </Layout>
        );
    }
}

Index.getInitialProps = async({ query }) => {

    const res = await fetch(CONTACT_US);
    const json = await res.json();

    return {
        contact: json.results
    }
  }


export default Index;
