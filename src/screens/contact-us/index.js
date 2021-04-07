import React from 'react'
import { View, Text } from 'react-native';
import { styles } from './style';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Row
} from "native-base";

export default function ContactUsScreen() {
    return (
        <View style={styles.container}>
            <Container>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text>Fast Coffee</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                - FCA (Fast Coffee Application) là một ứng dụng giúp kết nối những nhà 
                                bán cà phê với khách hàng của họ, thông qua 
                                hệ thống đặt hàng từ xa mà chưa có ứng dụng nào đã làm trước đây.
                            </Text>
                            <Text>
                            - Bên cung cấp dịch vụ FCA: FCA cung cấp dịch vụ liên kết giữa người 
                            dùng và cửa hàng thông qua hệ thống đặt hàng và take away một cách nhanh chóng. 
                            Các cửa hàng muốn liên kết với ứng dụng chỉ cần trả một khoản phí dịch vụ để duy
                            trì sự hiện diện của cửa hàng đối với người dùng trên ứng dụng, thời gian chi trả có thể tham khảo thêm ở dưới. 
                            </Text>
                            <Text>
                            - Bên đăng ký: Các cửa hàng muốn được mở bán trên ứng dụng phải 
                            đăng ký gói dịch vụ FCA đã cung cấp, thêm vào đó 
                            là các quy trình xác thực đơn giản chỉ trong một ngày.
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>Thông tin liên hệ</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Row>
                                <Text>Đường dây nóng: </Text>
                                <Text>0364133838</Text>
                            </Row>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        </View>
    )
}
