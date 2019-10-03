import React from 'react';
import { Container, MuiThemeProvider, Box, Typography } from '@material-ui/core';
import theme from './theme';
import { Header } from './components/Header';
import { GoodReadsBookListWidget } from './widgets/GoodReadsBookListWidget';
import data from './data';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Box mb={4}>
                    <Header />
                </Box>

                <Container>
                    <a name="books">
                        <Typography variant="h2" gutterBottom={true}>
                            Books
                        </Typography>
                    </a>

                    <Box mb={2}>
                        <GoodReadsBookListWidget title="Currently Reading" userId={data.goodReads.userId} shelf="currently-reading" count={20} />
                    </Box>
                    <Box mb={2}>
                        <GoodReadsBookListWidget title="Read" shelf="read" userId={data.goodReads.userId} count={20} />
                    </Box>
                </Container>
            </MuiThemeProvider>
        );
    }
}

export { App };