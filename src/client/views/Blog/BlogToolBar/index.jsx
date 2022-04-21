import React from 'react';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { ArticleContentBlock } from '../../../components/ArticleContentBlock';
import { useUserSession } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
import { urlList } from '../../../../static';
import { useStyles } from './styles';


const BlogToolBar = ({ showUnpublished, setShowUnpublished }) => {
    const [getUserSession] = useUserSession();
    const classes = useStyles();
    const history = useNavigate();

    const userSession = getUserSession();

    const handleAddBlogPost = async () => {
        history.push(urlList.BLOG_POST_NEW);
    };

    if (!userSession) {
        return null;
    }

    return (
        <ArticleContentBlock compact>
            <div className={classes.commandsContainer}>
                <div className={classes.commandContainer}>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddBlogPost}>Create</Button>
                </div>
                <div className={classes.commandContainer}>
                    <FormControlLabel control={<Checkbox checked={showUnpublished} onChange={(e) => setShowUnpublished(e.target.checked)} />} label="Show unpublished" />
                </div>
            </div>
        </ArticleContentBlock>
    );
};


export {
    BlogToolBar
};
