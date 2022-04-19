import { Input, Space } from 'antd';
import React, { useState } from 'react';
import { data } from "./data";

const { Search } = Input;

const onSearch = value => console.log(value);

export default function Search (){
  const [query, setQuery] = useState("")
  return (    
    <Space direction="vertical">
        <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            onChange={event => setQuery(event.target.value)}onChange={handleInputChange} />
        <div>
            {{data.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.markdown.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                    }).map((post) => (
                        <Card type="inner" title={post.title} size="default" hoverable={true}>
                            <p>{post.summary}</p>
                        </Card>     
                    ))
                }                     
            }
        </div>
        </Space>
        )
          }