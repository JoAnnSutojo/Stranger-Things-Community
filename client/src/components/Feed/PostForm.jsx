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
                className='postform-input'
                />
            </div>
            <hr className='postHr' />
            <form className="postform-bottom">
                <div className="postform-icons-conta">
                        <PermMedia className="postform-icons" />
                        <EmojiEmotions className="postform-icons" />
                </div>
                <button>
                    Post
                </button>
            </form>
            
           
        </div>
     );
}

export default PostForm;