import { Input, Space, Menu  } from 'antd';
import React, { useState } from 'react';
import { data } from "./data";

const { Search } = Input;

const onSearch = value => console.log(value);

export default function SearchFunction (){
    const [query, setQuery] = useState("")
    return (    
        <Space direction="vertical">
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                onChange={event => setQuery(event.target.value)} />
            <div>
                {data.filter(post => {
                        if (query === '') {
                            return null;
                        } else if (post.markdown.toLowerCase().includes(query.toLowerCase()) 
                        || post.title.toLowerCase().includes(query.toLowerCase()) 
                        || post.summary.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                        }
                        }).map((post) => (
                            <a href={post.link}>
                                <Menu style={{ background: "white"}}>
                                    <Menu.Item style={{gutter: "10"}}>{post.title}</Menu.Item>
                                </Menu>     
                            </a>
                        ))
                    }                     
            </div>
        </Space>
    )
}