import React from 'react';
import PropTypes from 'prop-types';
import { Container, Link, Typography, Box } from '@material-ui/core';
import { Facebook, LinkedIn, Email, Instagram } from '@material-ui/icons'

function getIconByVendor(vendor) {
    switch (vendor) {
        case 'facebook':
            return <Facebook fontSize="inherit" />
        case 'instagram':
            return <Instagram fontSize="inherit" />
        case 'linkedin':
            return <LinkedIn fontSize="inherit" />
        case 'email':
            return <Email fontSize="inherit" />
        default:
            return null;
    }
}

function getHRefByVendor(vendor, value) {
    switch (vendor) {
        case 'email':
            return `mailto:${value}`;
        default:
            return value;
    }
}

const AboutSection = ({ contacts }) => {
    return (
        <Container>
            <Typography paragraph variant="h1" align="center">
                Welcome!
            </Typography>
            <Typography paragraph variant="h2" align="center">
                My name is Ivan Cherkasov
            </Typography>
            <Typography paragraph variant="h3" align="center">
                I am a software engineer
            </Typography>

            <Box mt={8}>
                <Typography paragraph variant="h1" align="center">
                    {contacts.map(contact => (
                        <Link
                            key={contact.vendor}
                            href={getHRefByVendor(contact.vendor, contact.value)}
                            color="textPrimary"
                            target="_blank">
                            {getIconByVendor(contact.vendor)}
                        </Link>))}
                </Typography>
            </Box>
        </Container>
    );
};

AboutSection.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        vendor: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }))
};

export { AboutSection };