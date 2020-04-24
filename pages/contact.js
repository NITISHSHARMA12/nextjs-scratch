import React from 'react';
import Layout from '../Components/Layout';
import { CONTACT_US } from '../constant/apiUrl';
import * as _ from "lodash";
import fetch from "isomorphic-unfetch";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        console.log("ContactUs")
    }





    render() {
        let { contacts } = this.props;
        return (
            <Layout title="Contact Us" {...this.props}>
                {/* {contacts.map((contact ,index) => (
                    <div className="container top-space" key={index}>
                        <div className="col-md-6">
                            <div className="headline">
                                <h2 className="headTitle"><span>Google </span>Map</h2>
                                <div dangerouslySetInnerHTML={{__html: _.get(contact,'link')}}/>

                            </div>

                        </div>

                        <div className="col-md-6">
                            <div className="headline">
                                <h2 className="headTitle"><span>Meet </span>Here</h2>
                                <ul className="contact-widge">
                                    <li><h4> <b>{_.get(contact,'name')}</b> </h4></li>
                                    <li><span>Address : </span>{_.get(contact,'address')}</li>
                                    <li><span>Office Tel. : </span>{_.get(contact,'phone_no')}</li>
                                    <li><span>Email : </span>{_.get(contact,'email')}</li>
                                </ul>
                            </div>
                        </div>



                    </div>

                ))} */}



                <style jsx>{`
                    .headline{
                        display: block;
                        margin: 7px 0 25px 0;
                        // border-bottom: 1px dotted #e4e9f0;
                        padding-top: 20px;
                    }
                    .headTitle {
                        padding-bottom: 5px;
                        display: inline-block;
                        border-bottom: 2px solid green;
                        text-transform: capitalize;
                        font-family: auto;
                    }
                    .contact-widge {
                        list-style: none ;
                        font-size: 15px;
                        font-weight: 300;
                    }
                    .contact-widge>li>span{
                        font-weight: 600;
                    }

                    `}

                </style>
            </Layout>
        );
    }
}


Contact.getInitialProps =function(){

    const res =  fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data =  res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
    return {
        contacts: data
    }
}


