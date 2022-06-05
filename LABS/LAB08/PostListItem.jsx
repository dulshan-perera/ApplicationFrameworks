import React from 'react'

export default function PostListItem(props) {
    const {post} = props;
    const {selectPost} = props;
    return( 
            <tr>
                <td style={{padding:10, textAlign:'center'}}>{post.id}</td>
                <td style={{padding:10, textAlign:'center'}}>{post.name}</td>
                <td style={{padding:10, textAlign:'center'}}>{post.description}</td>
                <td style={{padding:10, textAlign:'center'}}><a onClick={() => selectPost(post)}><b>SELECT</b></a></td>
            </tr>
            
    )
}