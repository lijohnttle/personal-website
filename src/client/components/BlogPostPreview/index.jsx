import React from 'react';
import { Box, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AccessTimeOutlined, FolderOutlined, ChevronRight, VisibilityOutlined } from '@mui/icons-material';
import { InternalLink } from '../';
import { useUserSession } from '../../hooks';
import { BlogPostModel, UserSessionModel } from '../../models';
import * as urlUtils from '../../../utils/urlBuilder';
import { colors, shadows } from '../../themes';


/**
 * @readonly
 * @enum {String}
 */
 export const DisplayMode = {
    tiles: 'tiles',
    list: 'list',
};

/**
 * @param {Object} param0 
 * @param {BlogPostModel} param0.blogPost 
 * @param {UserSessionModel} param0.userSession 
 * @return {String}
 */
function SubTitle({ blogPost, userSession }) {
    const publishedDate = blogPost.publishedOn
        ? blogPost.publishedOn.toLocaleDateString(undefined, { dateStyle: 'long' }).toUpperCase()
        : 'NOT PUBLISHED';

    return (
        <>
            <span>
                <AccessTimeOutlined sx={{ verticalAlign: 'text-bottom', marginRight: 0.5, fontSize: '1.16em' }} />
                <span style={{ textAlign: 'middle' }}>
                    {publishedDate}
                </span>
            </span>

            {blogPost.category && (
                <span>
                    <span>{'\u00a0\u00a0|\u00a0\u00a0'}</span>
                    <FolderOutlined sx={{ verticalAlign: 'text-bottom', marginRight: 0.5, fontSize: '1.3em' }} />
                    <span style={{ verticalAlign: 'middle' }}>
                        {blogPost.category}
                    </span>
                </span>
            )}

            {userSession && (
                <span>
                    <span>{'\u00a0\u00a0•\u00a0\u00a0'}</span>
                    <VisibilityOutlined sx={{ verticalAlign: 'text-bottom', marginRight: 0.5, fontSize: '1.16em' }} />
                    <span style={{ textAlign: 'middle' }}>
                        {blogPost.visits || 0}
                    </span>
                </span>
            )}
        </>
    );
}

/**
 * @param {Object} param0 
 * @param {BlogPostModel} param0.blogPost 
 * @param {Boolean} param0.compact
 * @param {Boolean} param0.tile
 * @returns 
 */
function RenderReadButton({ blogPost, compact, tile }) {
    const theme = useTheme();
    const lessThanSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <InternalLink
            to={urlUtils.getBlogPostUrlPath(blogPost.slug)}
            sx={{
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'stretch',
                color: colors.grayText,
                paddingLeft: {
                    xs: 2,
                    sm: compact ? 2 : (tile ? 6 : 4),
                },
                paddingRight: {
                    xs: 2,
                    sm: (compact || !tile) ? 2 : 4,
                },

                '&:hover': {
                    background: colors.active,
                    color: colors.activeText,
                },
            }}>
            {(compact || lessThanSm) ? null : <>READ&nbsp;</>}<ChevronRight />
        </InternalLink>
    );
}

/**
 * Represents a blog post preview as a tile view.
 * @param {Object} param0 
 * @param {BlogPostModel} param0.blogPost Blog post.
 * @param {Boolean} param0.showDescription Displays blog description.
 * @param {Boolean} param0.compact Displays in compact mode.
 * @param {UserSessionModel} param0.userSession Current user session.
 * @returns {React.ReactNode}
 */
function TileView({ 
    blogPost,
    showDescription,
    compact,
    userSession
}) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            flex={1}
            sx={{
                '&:hover': {
                    '& .hoverTarget': {
                        background: colors.active,
                    }
                }
            }}>
            <InternalLink
                to={urlUtils.getBlogPostUrlPath(blogPost.slug)}
                sx={{
                    position: 'relative',
                    display: 'block',
                    overflow: 'hidden',
                    aspectRatio: '3/2',
                    backgroundColor: colors.selectionBackground,
                }}
                >
                {blogPost.descriptionImage
                    ? (
                        <img
                            src={urlUtils.getBlogPostAttachmentUrlPath(blogPost.slug, blogPost.descriptionImage)}
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                width: '100%',
                                height: '100%',
                            }} />
                    ) : null}
                <Box
                    className="hoverTarget"
                    sx={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        background: '#000000a8',
                        color: 'white',
                        paddingX: 1,
                        paddingY: 0.5,
                    }}>
                    <Typography variant="caption" fontWeight="bold">
                        <SubTitle blogPost={blogPost} userSession={userSession} />
                    </Typography>
                </Box>
                
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        left: 0,
                        bottom: 0,
                        paddingBottom: 1,
                        paddingLeft: 2,
                    }}>
                    <Box
                        className="hoverTarget"
                        sx={{
                            background: '#000000a8',
                            color: colors.textComplementary,
                            padding: 1,
                        }}
                        >
                        {compact
                            ? (
                                <Tooltip title={<span style={{ fontSize: '1rem' }}>{blogPost.title}</span>}>
                                    <Box position="relative">
                                        <Typography variant="h5">
                                            &nbsp;
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            position="absolute"
                                            top="0"
                                            left="0"
                                            width="100%"
                                            noWrap>
                                            {blogPost.title.toUpperCase()}
                                        </Typography>
                                    </Box>
                                </Tooltip>
                            )
                            : (
                                <Typography variant="h3">
                                    {blogPost.title.toUpperCase()}
                                </Typography>
                            )}
                    </Box>
                </Box>
            </InternalLink>

            {showDescription && blogPost.description && (
                <InternalLink to={urlUtils.getBlogPostUrlPath(blogPost.slug)}>
                    <Typography
                        variant="body1"
                        textAlign="justify"
                        sx={{
                            background: 'black',
                            color: colors.textComplementary,
                            paddingY: 2,
                            paddingX: 1,
                        }}>
                        {blogPost.description}
                    </Typography>
                </InternalLink>
            )}
        </Box>
    );
}

/**
 * Represents a blog post preview as a list item view.
 * @param {Object} param0 
 * @param {BlogPostModel} param0.blogPost Blog post.
 * @param {Boolean} param0.showDescription Displays blog description.
 * @param {Boolean} param0.compact Displays in compact mode.
 * @param {UserSessionModel} param0.userSession Current user session.
 * @returns {React.ReactNode}
 */
function ListView({ 
    blogPost,
    showDescription,
    compact,
    userSession
}) {
    return (
        <Box display="flex" flexDirection="column">
            <Typography
                variant="caption"
                align="justify"
                marginTop={2}
                marginBottom={1}
                sx={{
                    marginLeft: 2,
                    marginRight: {
                        xs: 2,
                        sm: compact ? 2 : 4,
                    },
                }}>
                <SubTitle blogPost={blogPost} userSession={userSession} />
            </Typography>

            <Box
                display="flex"
                flexDirection="row"
                flexWrap="nowrap"
                sx={{
                    marginLeft: 2,
                    marginRight: {
                        xs: 2,
                        sm: compact ? 2 : 4,
                    },
                }}>
                <InternalLink
                    to={urlUtils.getBlogPostUrlPath(blogPost.slug)}
                    sx={{
                        display: 'block',
                        overflow: 'hidden',
                        flexShrink: 0,
                        aspectRatio: '3/2',
                        marginRight: 4,
                        backgroundColor: colors.selectionBackground,
                        width: '256px',
                        lineHeight: 0,
                    }}>
                    {blogPost.descriptionImage
                        ? (
                            <img
                                src={urlUtils.getBlogPostAttachmentUrlPath(blogPost.slug, blogPost.descriptionImage)}
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    width: '100%',
                                    height: '100%',
                                }} />
                        ) : null}
                </InternalLink>

                <Box>
                    <InternalLink
                        to={urlUtils.getBlogPostUrlPath(blogPost.slug)}
                        withoutUnderline
                        sx={{
                            position: 'relative',
                            color: 'inherit',
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                        }}>

                        {compact
                            ? (
                                <Tooltip title={blogPost.title}>
                                    <Box position="relative">
                                        <Typography variant="h5">
                                            &nbsp;
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            position="absolute"
                                            top="0"
                                            left="0"
                                            width="100%"
                                            noWrap>
                                            {blogPost.title.toUpperCase()}
                                        </Typography>
                                    </Box>
                                </Tooltip>
                            )
                            : (
                                <Typography variant="h3">
                                    {blogPost.title.toUpperCase()}
                                </Typography>
                            )}
                    </InternalLink>

                    {showDescription && blogPost.description && (
                        <Typography
                            variant="body1"
                            textAlign="justify"
                            sx={{
                                marginTop: {
                                    xs: 1,
                                    sm: compact ? 1 : 2,
                                },
                            }}>
                            {blogPost.description}
                        </Typography>
                    )}
                </Box>
            </Box>

            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                marginTop={2}
                sx={{
                    borderTop: '1px solid #eaeaea'
                }}>
                <Typography
                    variant="body1"
                    paddingTop={2}
                    paddingBottom={2}
                    paddingLeft={2}
                    paddingRight={2}
                    fontWeight="bold">
                    {blogPost.category
                        ? (
                            <>
                                <FolderOutlined sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                                <span style={{ verticalAlign: 'middle' }}>
                                    {blogPost.category}
                                </span>
                            </>
                        )
                        : <>&nbsp;</>}
                </Typography>

                <RenderReadButton blogPost={blogPost} compact={compact} />
            </Box>
        </Box>
    );
}

/**
 * Represents a blog post preview.
 * @param {Object} param0 
 * @param {BlogPostModel} param0.blogPost Blog post.
 * @param {Boolean} param0.showDescription Displays blog description.
 * @param {Boolean} param0.compact Displays in compact mode.
 * @param {DisplayMode} param0.displayMode Display mode.
 * @returns {React.ReactNode}
 */
export function BlogPostPreview({ 
    blogPost,
    showDescription,
    compact,
    displayMode
}) {
    displayMode = displayMode || DisplayMode.tiles;

    const [getUserSession] = useUserSession();
    const userSession = getUserSession();

    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{
                flex: '1',
            }}>
            {displayMode === DisplayMode.tiles
                ? <TileView blogPost={blogPost} showDescription={showDescription} compact={compact} userSession={userSession} />
                : <ListView blogPost={blogPost} showDescription={showDescription} compact={compact} userSession={userSession} />}
        </Box>
    );
}

BlogPostPreview.displayMode = DisplayMode;
