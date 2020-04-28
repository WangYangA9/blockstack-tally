import React,{Component} from 'react';
import styles from './index.css';
import { Row, Col,Card } from "antd";
import Fromdata from "./fromdata";
import Tabledata from "./tabledata";
import Chartdata from "./chartdata";
import FetchDownloadCsv from "./filedownload"
import FetchDownloadJson from "./filedownloadjson"


export default class Setcategory extends Component {

    render() {
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
                            <Col span={18}> <Tabledata /> </Col>
                            <Col span={6}> <Fromdata /> </Col>
                            
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
