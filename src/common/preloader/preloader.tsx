import React from "react";
import {Flex, Spin} from "antd";

export let Preloader = () => {
    return <div>
        <Flex gap="small" vertical>
            <Flex gap="small">
                <Spin tip="Loading" size="large" fullscreen>
                    <div className="content"/>
                </Spin>
            </Flex>
        </Flex>
    </div>
}