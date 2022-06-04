import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, IconButton, Box, Button } from '@mui/material';
import { KeyboardArrowDown, ReadMore } from '@mui/icons-material'
import { ContactLink, Header, InternalLink } from '../../../components';
import { styled } from '@mui/system';
import { colors } from '../../../themes';


const ContentContainer = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(8),
    paddingRight: theme.spacing(16),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(16),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '0 0 auto',

    [theme.breakpoints.down('md')]: {
        paddingRight: theme.spacing(8),
        paddingLeft: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
    },
}));

const NextSectionButtonContainer = styled('div')(({ theme }) => ({
    flex: '1 1 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));


const WelcomeSectionContent = ({ contacts, gotoNextSection }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            flexGrow={1}
            color={colors.textComplementary}
            sx={{ background: '#000000af' }}>
            <Box flex="1 1 auto" alignSelf="stretch">
                <Header transparent dark />
            </Box>

            <ContentContainer>
                <Typography paragraph variant="h1" align="center">
                    Welcome!
                </Typography>
                <Typography paragraph variant="h2" align="center">
                    My name is Ivan Cherkasov
                </Typography>
                <Typography paragraph variant="h3" align="center">
                    I am a Software Engineer
                </Typography>

                <InternalLink
                    to="/about"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: colors.text,
                        border: `1px solid ${colors.text}`,
                        background: colors.background,
                        alignSelf: 'center',
                        marginTop: 2,
                        paddingLeft: 4,
                        paddingRight: 4,
                        paddingTop: 1,
                        paddingBottom: 1,
                        fontSize: 'inherit',

                        '&:hover': {
                            color: colors.activeText,
                            borderColor: colors.active,
                            background: colors.active,
                        },
                    }}>
                    READ MORE <ReadMore sx={{ marginLeft: 1 }} />
                </InternalLink>

                <Box
                    display="flex"        
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    marginTop={6}
                    sx={{
                        position: {
                            xs: 'unset',
                            md: 'absolute',
                        },
                        flexDirection: {
                            xs: "row",
                            md: "column",
                        },
                        right: {
                            xs: 'unset',
                            md: '32px',
                        },
                    }}>
                    {contacts.filter(c => c.types.some(ct => ct === 'social')).map(contact => (
                        <ContactLink key={contact.vendor} contact={contact} dark fontSize="large" />
                    ))}
                </Box>
            </ContentContainer>

            <NextSectionButtonContainer className="nextSectionButtonContainer">
                <IconButton
                    onClick={gotoNextSection}
                    color="inherit"
                    sx={{
                        '&:hover': {
                            background: colors.active,
                            color: colors.activeText,
                        }
                    }}>
                    <KeyboardArrowDown fontSize="large" />
                </IconButton>
            </NextSectionButtonContainer>
        </Box>
    );
};

WelcomeSectionContent.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        vendor: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })),
    gotoNextSection: PropTypes.func.isRequired
};

export {
    WelcomeSectionContent
};
