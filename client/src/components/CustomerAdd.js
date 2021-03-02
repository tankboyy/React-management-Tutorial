import React from 'react';
import { post } from 'axios';

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthDay: '',
            gender: '',
            job: '',
            fileName: ''
        }
    };

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthDay', this.state.birthDay);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
                'content-type': 'multipart/from-data'
            }
        }
        return post(url, formData, config);
    }

    handleFromSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName: '',
            birthDay: '',
            gender: '',
            job: '',
            fileName: ''
        })
    }

    handleiFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValuechange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        console.log(nextState, '1')
        this.setState(nextState);
    }

    render() {
        return (
            <form onSubmit={this.handleFromSubmit}>
                <h1>고객 추가</h1>
                프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleiFileChange}/> <br/>
                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValuechange} /> <br/>
                생년월일: <input type="text" name="birthDay" value={this.state.birthDay} onChange={this.handleValuechange} /> <br/>
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValuechange} /> <br/>
                직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValuechange}/> <br/>
                <button type="submit">추가하기</button>
            </form>
        );
    }
} 

export default CustomerAdd;
