import {Col, Row} from "antd";
import {Cover} from "../../components/Auth/Cover";
import AuthForm from "../../components/Auth/AuthWindow";
import styles from './index.module.scss'
import {useSelector} from "../../../store/store";
import {useEffect} from "react";

export const LoginPage = () => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);
    const {hasAccountAuth} = useSelector((state) => state.userGlobalAuth);
    return (
        <Row className={styles.loginPage} style={{height: '90%', overflow: 'hidden'}} gutter={0}
             justify={'space-around'} align={'middle'}>
            <Cover/>
            <Col className={styles.authBlock} style={{height: '40%'}} offset={4} xs={20}>
                {!hasAccountAuth && <AuthForm/>}
            </Col>

            <Col className={styles.authBlock} style={{height: '40%'}} offset={4} xs={20}>
                {hasAccountAuth && <AuthForm/>}
            </Col>
        </Row>

    )
}