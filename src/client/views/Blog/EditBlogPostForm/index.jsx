import React from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useStyles } from './styles';
import { Article } from '../../../components/Article';
import { ContentBlock } from '../../../components/ContentBlock';


const EditBlogPostForm = ({
        isCreation,
        blogPostTitle,
        setBlogPostTitle,
        blogPostSlug,
        setBlogPostSlug,
        blogPostDescription,
        setBlogPostDescription,
        blogPostContent,
        setBlogPostContent,
        blogPostPublish,
        setBlogPostPublish,
        onPreview,
        onSave
    }) => {

    const classes = useStyles();

    const previewButtonClickHandler = () => {
        onPreview();
    };

    return (
        <Article title={isCreation ? 'NEW BLOG POST' : 'EDIT BLOG POST'}>
            <ContentBlock>
                <form className={classes.form}>
                    <div className={classes.fieldContainer}>
                        <TextField
                            required
                            label="Title"
                            defaultValue={blogPostTitle}
                            onChange={e => setBlogPostTitle(e.target.value)} />
                    </div>
                    <div className={classes.fieldContainer}>
                        <TextField
                            required
                            label="Slug"
                            defaultValue={blogPostSlug}
                            onChange={e => setBlogPostSlug(e.target.value)} />
                    </div>
                    <div className={classes.fieldContainer}>
                        <TextField
                            required
                            label="Description"
                            multiline
                            maxRows={4}
                            defaultValue={blogPostDescription}
                            onChange={e => setBlogPostDescription(e.target.value)} />
                    </div>
                    <div className={classes.fieldContainer}>
                        <TextField
                            required
                            label="Content"
                            multiline
                            rows={16}
                            defaultValue={blogPostContent}
                            onChange={(e) => setBlogPostContent(e.target.value)} />
                    </div>
                    
                    <div className={classes.commandsContainer}>
                        <div className={classes.commandContainer}>
                            <FormControlLabel control={<Checkbox checked={blogPostPublish} onChange={(e) => setBlogPostPublish(e.target.checked)} />} label="Publish" />
                        </div>
                        <div className={classes.commandContainer}>
                            <Button color="primary" variant="outlined" onClick={previewButtonClickHandler}>PREVIEW</Button>
                        </div>
                        <div className={classes.commandContainer}>
                            <Button color="success" variant="contained" onClick={onSave}>{isCreation ? 'CREATE' : 'SAVE'}</Button>
                        </div>
                    </div>
                </form>
            </ContentBlock>
        </Article>
    );
};


export {
    EditBlogPostForm
};
