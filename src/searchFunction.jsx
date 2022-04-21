import { Input, Space, Menu, Dropdown  } from 'antd';
import React, { useState } from 'react';
import { data } from "./data";

const { Search } = Input;

const onSearch = value => console.log(value);

export default function SearchFunction (){
    const [query, setQuery] = useState("")

    const menu =  (
        <Menu 
        items={[data.filter(post => {
        if (query === '') {
            return null;
        } else if (post.markdown.toLowerCase().includes(query.toLowerCase()) 
        || post.title.toLowerCase().includes(query.toLowerCase()) 
        || post.summary.toLowerCase().includes(query.toLowerCase())) {
            return post;
        }
        }).map(post => ({
           label:  (<a href={post.link}>{post.title}</a>),
        }))
    ]}
    />
    )
    
    return (    
        <Space direction="vertical">
            <Dropdown overlay={menu}>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    onChange={event => setQuery(event.target.value)}>
                </Search> 
            </Dropdown>
        </Space>
    )
}