import React, { Component } from 'react';
import { MdVideocamOff, MdVideocam, MdMicOff, MdMic } from 'react-icons/md';
import { Container, Row, Col } from 'react-bootstrap';

class UserStatus extends Component {
  constructor(props) {
    super(props);
    this.User = {};
    this.host = false;
    this.consoleUser = this.consoleUser.bind(this);
    this.changeVideo = this.changeVideo.bind(this);
    this.changeAudio = this.changeAudio.bind(this);
  }
  componentDidUpdate() {
    this.consoleUser();
  }
  consoleUser() {
    this.User = this.props.user;
    this.host = this.props.isHost;
    console.log(this.User);
    console.log(this.host, '호스트냐');
  }
  changeVideo(){
    this.User.setVideoActive(!this.User.isVideoActive());
  }
  changeAudio(){
    this.User.audioActive = this.User.setAudioActive(!this.User.isAudioActive());
  }
  render() {
    return (
      <Row>
        {this.host? (
            // 호스트일때
          <div style={{ alignItems: 'center', display: 'flex' }} >
            <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>
              {this.User.nickname}
            </span>
            <div>
              {this.User.videoActive ? (
                <MdVideocam onClick={this.changeVideo} style={{ cursor: "pointer", color: '#6667AB' }} size={'1.2rem'} />
              ) : (
                <MdVideocamOff onClick={this.changeVideo} style={{ cursor: "pointer", color: 'gray' }} size={'1.2rem'} />
              )}
              {this.User.audioActive ? (
                <MdMic onClick={this.changeAudio} style={{cursor: "pointer",  color: '#6667AB' }} size={'1.2rem'} />
              ) : (
                <MdMicOff onClick={this.changeAudio} style={{ cursor: "pointer", color: 'gray' }} size={'1.2rem'} />
              )}
            </div>
          </div>
        ) : (
            // 게스트일때
          <div style={{ alignItems: 'center', display: 'flex' }}>
            <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>
              {this.User.nickname}
            </span>
            <div>
              {this.User.videoActive ? (
                <MdVideocam style={{ color: '#6667AB' }} size={'1.2rem'} />
              ) : (
                <MdVideocamOff style={{ color: 'gray' }} size={'1.2rem'} />
              )}
              {this.User.audioActive ? (
                <MdMic style={{ color: '#6667AB' }} size={'1.2rem'} />
              ) : (
                <MdMicOff style={{ color: 'gray' }} size={'1.2rem'} />
              )}
            </div>
          </div>
        )}
      </Row>
    );
  }
}
export default UserStatus;
