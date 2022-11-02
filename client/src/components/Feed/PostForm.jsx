import React from 'react';
import { Avatar } from '@material-ui/core';
import { PermMedia, EmojiEmotions } from '@material-ui/icons'

function PostForm() {
    return ( 
        <div className='postform-conta'>
            <div className="postform-top">
                <Avatar>J</Avatar>
                <input
                placeholder="What's on your mind Jo?"
                />
            </div>
            <hr className='postHr' />
           <div className="postform-bottom">
                <PermMedia />
                <EmojiEmotions />
           </div>
           
        </div>
     );
}

export default PostForm;