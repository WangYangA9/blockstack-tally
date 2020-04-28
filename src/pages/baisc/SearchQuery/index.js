import React,{Component} from 'react';
import styles from './index.css';
import { Row, Col } from "antd";
import Fromdata from "./fromdata";
import Tabledata from "./tabledata";
import Chartdata from "./chartdata";
import FetchDownloadCsv from "./filedownload"
import FetchDownloadJson from "./filedownloadjson"


export default class Setcategory extends Component {
     constructor(props) {
        super(props)
        this.state={
            waterbill:props.waterbill
        }
    }  
    
    searchhanld= value =>{
        const waterbill=this.props.waterbill
        let searchdata=[]
        for(let x in waterbill){
            if(waterbill[x].item.indexOf(value) != -1 ){
                searchdata.push( waterbill[x])
            }
        }
        this.setState({waterbill:searchdata})
    }

    render() {
       // console.log(this.state.waterbill)
        return (
            <div className={styles.container}>
                <div id="components-grid-demo-basic">
                    <>
                        <Row>
                            <Chartdata />
                            
                        </Row>
                    </>
                </div>
                <div id="components-grid-demo-basic">
                    <>
                        <Row>
                            <Col span={18}> <Tabledata waterbill={this.state.waterbill}/> </Col>
                            <Col span={6}> <Fromdata  searchhanld = { this.searchhanld }/></Col>
                            
                        </Row>
                    </>
                </div>
                {/* TODO 传入内容*/}
                <FetchDownloadCsv content={'流水账单'}></FetchDownloadCsv>
                <FetchDownloadJson content={'流水账单'}></FetchDownloadJson>
            </div>

        );
    }
}
