import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           
        }
    }

  


    render() {
        const {diseases} =this.state;
        console.log("hi", this.props)
        return (
            <section>
                <Header {...this.props}/>
                    {this.props.children}
                <Footer/>
            </section>
        );
    }
}



export default Layout;