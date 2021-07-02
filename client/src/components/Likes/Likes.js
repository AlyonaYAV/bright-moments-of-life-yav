import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { ThumbUpAltOutlined } from '@material-ui/icons';

const Likes = ({ user, post })=>{
    const likesLength = post.likes.length;
    if(likesLength > 0){
      return post.likes.find( like => like === (user?.result?.googleId || user?.result?._id ) )
      ? (<>
          <ThumbUpAltIcon  fontSize="smail" />&nbsp;{ likesLength > 2 ? `You and ${likesLength - 1} others` : `${likesLength} likes${likesLength > 1 ? 's' : ''}`}
        </>)
      : (<>
          <ThumbUpAltIcon  fontSize="smail" />&nbsp;{ likesLength } { likesLength === 1 ? 'Like' : 'Likes'}
      </>)
    }
    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>
  };
  export default Likes;