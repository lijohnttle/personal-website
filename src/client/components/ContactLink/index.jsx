import React from 'react';
import {
    Facebook,
    LinkedIn,
    Email,
    Instagram,
    GitHub,
    Link as LinkIcon,
    Twitter,
    Web } from '@mui/icons-material'
import { IconButton } from '@mui/material';
import { buildUrlByVendor } from '../../utils/links';
import { colors } from '../../themes';


/**
 * Creates an icon element according to the vendor's name.
 * @param {String} vendor Vendor's name.
 * @returns {import('react').ReactElement} 
 */
 function createIconByVendor(vendor, fontSize) {
    switch (vendor) {
        case 'facebook':
            return <Facebook fontSize={fontSize} />;
        case 'instagram':
            return <Instagram fontSize={fontSize} />;
        case 'linkedin':
            return <LinkedIn fontSize={fontSize} />;
        case 'github':
            return <GitHub fontSize={fontSize} />;
        case 'web':
            return <Web fontSize={fontSize} />;
        case 'email':
            return <Email fontSize={fontSize} />;
        case 'twitter':
            return <Twitter fontSize={fontSize} />
        default:
            return <LinkIcon fontSize={fontSize} />;
    }
}

export const ContactLink = ({ contact, dark, fontSize }) => (
    <IconButton
        sx={{
            '&:hover': {
                background: `${colors.active} !important`,
                color: `${colors.activeText} !important`,
            }
        }}
        href={buildUrlByVendor(contact.vendor, contact.value)}
        color="inherit"
        target="_blank">
        {createIconByVendor(contact.vendor, fontSize || 'inherit')}
    </IconButton>
);
