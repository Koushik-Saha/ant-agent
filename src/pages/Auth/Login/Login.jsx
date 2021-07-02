import React, {useState} from 'react'
// import {LOCAL_STORAGE_KEY, LOCAL_STORAGE_USER} from "../../../consts/storage";
import {Flex, InputItem, List, WhiteSpace, WingBlank} from "antd-mobile";

const Item = List.Item;

const Login = () => {
    // const { login } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(null);
    const onSubmit = (values) => {
        setIsLoading(true)
        // login(values)
        // 	.then((res) => {
        // 		setIsLoading(false)
        // 		window.localStorage.setItem(LOCAL_STORAGE_KEY, res.data.token)
        // 		window.localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(res.data.user))
        // 		window.location.reload()
        // 	}).catch(err => {
        // 	setIsLoading(false)
        // 	setErrors(err.response);
        // })
    }
    return (
        <div style={{paddingTop: '50%'}}>
            <WhiteSpace size="lg"/>
            <WingBlank>
                <Item>Agent Login</Item>
                <List style={{marginTop: '10%'}}>
                    <InputItem
                        clear
                        placeholder="Email Address "
                        ref={el => this.autoFocusInst = el}
                    >Email: </InputItem>
                    <InputItem
                        clear
                        placeholder="****"
                        ref={el => this.inputRef = el}
                        type="password"
                    >Password: </InputItem>
                    <List.Item>
                        <div
                            style={{width: '100%', color: '#108ee9', textAlign: 'center'}}
                            onClick={this.handleClick}
                        >
                            Login
                        </div>
                    </List.Item>
                </List>
            </WingBlank>
        </div>

    );
};

export default Login
