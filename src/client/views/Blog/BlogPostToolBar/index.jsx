import React from 'react';
import { Button, Tooltip } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { ContentBlock } from '../../../components';
import { useUserSession } from '../../../hooks';
import { generatePath, useNavigate } from 'react-router-dom';
import { pagesDescriptors } from '../../../../static';
import { Box, styled, Breakpoint } from '@mui/system';


const CommandGroupContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
}));

const CommandContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    marginRight: theme.spacing(1),
}));

/**
 * 
 * @param {Object} props
 * @param {String} props.slug Blog post slug.
 * @param {Breakpoint} props.maxWidth Max with of the container.
 * @returns {React.ReactNode}
 */
const BlogPostToolBar = (props) => {
    const [getUserSession] = useUserSession();
    const navigate = useNavigate();

    const userSession = getUserSession();

    const handleEditBlogPost = async () => {
        navigate(generatePath(pagesDescriptors.BLOG_POST_EDIT.path, { slug: props.slug }));
    };

    if (!userSession) {
        return null;
    }

    return (
        <ContentBlock compact maxWidth={props.maxWidth || 'md'}>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center">
                <CommandGroupContainer>
                    <CommandContainer>
                        <Tooltip title="Edit blog post">
                            <Button variant="text" startIcon={<EditIcon />} onClick={handleEditBlogPost}>
                                Edit
                            </Button>
                        </Tooltip>
                    </CommandContainer>
                </CommandGroupContainer>
            </Box>
                
        </ContentBlock>
    );
};


export {
    BlogPostToolBar
};
