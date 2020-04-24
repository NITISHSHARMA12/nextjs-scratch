import React from 'react';
import { DISEASE_LIST_API } from '../constant/apiUrl';
import fetch from "isomorphic-unfetch";

class MyApp extends React.Component{


    render() {
        const {Component} =this.props;
        console.log("ComponentComponent",this.props)
        return (
            <Component {...this.props}/>
        );
    }
}
MyApp.getInitialProps = async({ query }) => {
    let diseaseCat = {};
    const res = await fetch(DISEASE_LIST_API);

    const json = await res.json();

    json.results.forEach(function(disease){
        if(diseaseCat[disease.disease_type]){
            diseaseCat[disease.disease_type].push(disease);
        }else{
            diseaseCat[disease.disease_type] = [disease]
        }
    });

    return {
        diseases: json.results,
        diseaseCat: diseaseCat
    }
}

export default MyApp
