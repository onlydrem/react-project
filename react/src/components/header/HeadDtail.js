// require('normalize.css/normalize.css');
require('styles/HeaderDtail.css');
require('styles/reset.css');
// require('styles/add.css');
//引入图片路径
// import Bg from '../../images/img/left.png';
import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";



const CLOUDINARY_UPLOAD_PRESET = 'bmzjbxoq';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/react-cloudinary/upload';

export default class HeadDtail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
  }
  static contextTypes={   //第三种路由方法  通过上下文来获取history
    router:PropTypes.object
}
onClick=()=>{
  this.context.router.history.goBack(-1);
}
  // handleOnClick(){
  //   this.props.history.goBack();
  // }
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        // console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <div className="accountBox">
        <div className="DtailTop">
          <i className="DtailTop-return" onClick={this.onClick}></i>
          <p>个人中心</p>
        </div>
        <form className="Login">
          <div className="FileUpload">
            <Dropzone className="uplodImg" onDrop={this.onImageDrop.bind(this)}
              multiple={false}
              accept="image/*">
              <div>
                {/* <p>{this.state.uploadedFile.name}</p> */}
                {this.state.uploadedFileCloudinaryUrl === '' ? null :
                  <div>
                    <img src={this.state.uploadedFileCloudinaryUrl} />
                  </div>}
              </div>
            </Dropzone>

          </div>
          <div className="denglu">
              <Link to="/SigUp">点击登录</Link>
          </div>
        </form>
        <ul>
          <li className="Collection">
            <img className="personImg" src={require('../../images/img/wdsc.png')} alt="" />
            <p className="con">我的收藏</p>
          </li>
          <li className="News"><img className="personImg" src={require('../../images/img/news.png')} alt="" />
            <p className="con">我的消息</p>
          </li>
          <li className="Community"><img className="personImg" src={require('../../images/img/sz.png')} alt="" />
            <p className="con">我的圈子</p></li>
          <li className="Ptohos"><img className="personImg" src={require('../../images/img/wdxc.png')} alt="" />
            <p className="con">我的相册</p></li>
          <li className="Money"><img className="personImg" src={require('../../images/img/atm.png')} alt="" />
            <p className="con">我的钱包</p></li>
          <li className="Position"><img className="personImg" src={require('../../images/img/wxb.png')} alt="" />
            <p className="con">我的位置</p></li>
          <li className="Customer-service"><img className="personImg" src={require('../../images/img/atm.png')} alt="" />
            <p className="con">联系客服</p></li>
          <li className="Set"><img className="personImg" src={require('../../images/img/sz.png')} alt="" />
            <p className="con">设置</p></li>
        </ul>
      </div>
    );
  }
}









