import React, { useRef } from 'react';
import { CircularProgress, Container, IconButton, Typography } from '@mui/material';
import { ArrowDownwardRounded } from '@mui/icons-material';
import { animateScroll } from 'react-scroll';
import { smoothScrollOptions } from '../../../utils/scrolling';
import { useStyles } from './styles';


const renderTitle = (title, classes) => {
    return (
        <div className={classes.title}>
            <Typography variant="h1" align="center">
                {title}
            </Typography>
        </div>
    );
};

const renderLoader = (classes) => {
    return (
        <div className={classes.loader}>
            <CircularProgress />
        </div>
    );
};

const renderScrollButton = (classes, clickHandler) => {
    return (
        <div className={classes.gotoNextSectionButtonContainer}>
            <IconButton onClick={clickHandler}>
                <ArrowDownwardRounded fontSize="large" />
            </IconButton>
        </div>
    );
};

const SectionContentContainer = ({ children, className, title, isLoading, maxWidth, canScrollToNextSection }) => {
    const containerRef = useRef();
    const classes = useStyles();

    const scrollToNextSection = () => {
        if (containerRef.current) {
            animateScroll.scrollTo(containerRef.current.offsetTop + containerRef.current.clientHeight, smoothScrollOptions);
        }
    };

    return (
        <Container ref={containerRef} maxWidth={maxWidth || 'lg'}>
            <div className={`${classes.root} ${className || ''}`}>
                <div className={classes.topSpace}></div>

                {title ? renderTitle(title, classes) : null}

                {isLoading ? renderLoader(classes) : children}

                <div className={classes.bottomSpace}>
                    {canScrollToNextSection ? renderScrollButton(classes, scrollToNextSection) : null}
                </div>
            </div>
        </Container>
    );
};


export {
    SectionContentContainer
};
