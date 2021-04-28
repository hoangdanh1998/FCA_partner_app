import React, { useEffect } from "react";
import Timeline from "react-native-timeline-flatlist";
import moment from "moment";
import { Card, CardItem, Left, Right, Text, View } from "native-base";

import { BACKGROUND_COLOR } from "../../../constance/constance";

const TimelineTransaction = (props) => {

    const date = props.date;
    const transactions = props.transactions;
    console.log('child', transactions);
    return (
        <View style={{ flex: 1, marginLeft:"40%", justifyContent: "center",}}>

            <Timeline
                circleColor={BACKGROUND_COLOR}
                lineColor={BACKGROUND_COLOR}
                // data={timeline}
                data={transactions}
                rowContainerStyle = {{height:70}}
            />

        </View>
    );
};

export default TimelineTransaction;
