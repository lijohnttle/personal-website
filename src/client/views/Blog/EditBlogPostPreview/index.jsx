import React from 'react';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { Article } from '../../../components/Article';
import { ContentBlock } from '../../../components/ContentBlock';
import { BlogMarkdown } from '../../../components/BlogMarkdown';
import { EditMode } from '../EditBlogPostForm';
import { BlogPostModel } from '../../../models';
import { Box, styled } from '@mui/system';
import { getBlogPostAttachmentUrl } from '../../../../utils/urlBuilder';


const CommandContainer = styled('div')(({ theme }) => ({
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2)
}));


/**
 * Form for editing an existing or adding a new blog post.
 * @param {Object} props 
 * @param {EditMode} props.mode
 * @param {BlogPostModel} props.blogPost
 * @param {onBlogPostChanged} props.onChange
 * @param {Function} props.onEdit
 * @param {Function} props.onSave
 * @param {Function} [props.onDelete]
 */
const EditBlogPostPreview = (props) => {
    return (
        <Article title={props.blogPost.title.toUpperCase()} compact titleMaxWidth="md">
            <ContentBlock maxWidth="md">
                {props.blogPost.descriptionImage
                    ? <img
                        src={getBlogPostAttachmentUrl(props.blogPost.slug, props.blogPost.descriptionImage)}
                        style={{ maxWidth: '100%' }} />
                    : null}

                <BlogMarkdown attachments={props.blogPost.attachments} children={props.blogPost.content} />

                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    <Box display="flex" flexDirection="row" justifyContent="flex-end">
                        <CommandContainer>
                            <FormControlLabel
                                control={<Checkbox checked={props.blogPost.published}
                                name="published"
                                onChange={(e) => props.onChange(e.target.name, e.target.checked)} />}
                                label="Publish" />
                        </CommandContainer>
                        {props.mode === EditMode.edit
                        ? (
                            <CommandContainer>
                                <Button color="error" variant="outlined" onClick={props.onDelete}>DELETE</Button>
                            </CommandContainer>
                        ) : null}
                        <CommandContainer>
                            <Button color="primary" variant="outlined" onClick={props.onEdit}>EDIT</Button>
                        </CommandContainer>
                        <CommandContainer>
                            <Button color="success" variant="contained" onClick={props.onSave}>
                                {props.mode === EditMode.create ? 'CREATE' : 'SAVE'}
                            </Button>
                        </CommandContainer>
                    </Box>
                </form>
            </ContentBlock>
        </Article>
    );
};


export {
    EditBlogPostPreview
};
