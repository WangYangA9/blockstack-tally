import React, {Component} from 'react';
class FetchDownloadJson extends Component {
    download = (content) => {
        let a = document.createElement('a');
        let url = window.URL.createObjectURL(new Blob([content], { type: "" }));
        let filename = 'fileDownload.json'; //提取文件名
        a.href = url;
        a.download = filename; //给下载下来的文件起个名字
        a.click();
        window.URL.revokeObjectURL(url);
        a = null;
    };

    render() {
        const { content } = this.props;
        return (
            <input type="button" value="下载json" onClick={this.download}/>
        )
    }
}
export default FetchDownloadJson;