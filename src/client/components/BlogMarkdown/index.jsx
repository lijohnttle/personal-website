import { Theme, Typography, useTheme } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import RehypeRaw from 'rehype-raw';
import { getBlogPostAttachmentUrlPath } from '../../../utils/urlBuilder';
import { BlogPostModel } from '../../models';
import { colors } from '../../themes';


/**
 * @param {String} query 
 * @param {Object} props 
 * @param {Theme} theme 
 */
function parseImageProps(query, props, theme) {
    const keyValues = query.split('&');

    for (let keyValue of keyValues) {
        const [key, value] = keyValue.split('=').map(t => t.trim());

        if (key === 'size') {
            if (value === 'small') {
                props.maxHeight = 'calc(0.66*100vh)';
            }
            else if (value === 'fit') {
                props.maxHeight = 'calc(100vh)';
            }
        }
    }
}

/**
 * 
 * @param {Object} props
 * @param {BlogPostModel} props.blogPost
 */
export const BlogMarkdown = (props) => {
    const theme = useTheme();

    let content = props.blogPost.content;
    let descriptionImageContent = '';
    let descriptionContent = '';

    if (props.blogPost.descriptionImage) {
        descriptionImageContent = `![](${props.blogPost.descriptionImage})` + "\n\n"
    }

    if (props.blogPost.description) {
        descriptionContent = `> *${props.blogPost.description}*` + "\n\n"
    }

    content = descriptionImageContent + descriptionContent + content;

    return (
        <ReactMarkdown
            children={content}
            rehypePlugins={[RehypeRaw]}
            components={{
                img: ({ src, ...otherProps }) => {
                    const linkToAttachment = src.indexOf('/') < 0;

                    if (linkToAttachment) {
                        let srcParts = src.split('?');

                        let url = srcParts[0];

                        if (props.blogPost.attachments) {
                            const foundAttachment = props.blogPost.attachments.find(t => t.name === url);

                            if (foundAttachment) {
                                url = foundAttachment.getUrl();
                            }
                        }
                        else if (props.blogPost.slug) {
                            url = getBlogPostAttachmentUrlPath(props.blogPostSlug, src);
                        }

                        const customProps = { };

                        if (srcParts.length > 1) {
                            parseImageProps(srcParts[1], customProps, theme);
                        }

                        return (
                            <img src={url} {...otherProps} style={{ maxWidth: '100%', ...customProps }} />
                        );
                    }
                },
                p:  (elementProps) => {
                    return (
                        <Typography variant="body1" paragraph sx={{ overflow: 'auto', marginTop: 1, marginBottom: 2 }}>
                            {elementProps.children}
                        </Typography>)
                },
                h2: (elementProps) => {
                    return (
                        <Typography variant="h2" sx={{ overflow: 'auto', marginTop: 6, marginBottom: 4 }}>
                            {elementProps.children}
                        </Typography>)
                },
                h3: (elementProps) => {
                    return (
                        <Typography variant="h3" sx={{ overflow: 'auto', marginTop: 6, marginBottom: 3 }}>
                            {elementProps.children}
                        </Typography>)
                },
                h4: (elementProps) => {
                    return (
                        <Typography variant="h4" sx={{ overflow: 'auto', marginTop: 2, marginBottom: 2 }}>
                            {elementProps.children}
                        </Typography>)
                },
                ul: (elementProps) => {
                    return (
                        <ul style={{ overflow: 'auto' }}>
                            {elementProps.children}
                        </ul>)
                },
                blockquote: (elementProps) => {
                    return (
                        <blockquote
                            style={{
                                color: colors.grayText,
                                fontStyle: 'italic',
                                margin: 0,
                                padding: '0.5em 40px',
                                background: 'whitesmoke',
                                borderLeft: `8px solid ${colors.grayText}`,
                            }}>
                            {elementProps.children}
                        </blockquote>)
                },
            }}
        />
    )
};