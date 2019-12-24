import React from 'react'
import Drawer from "@material-ui/core/Drawer";
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import CloseRounded from '@material-ui/icons/CloseRounded';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    card: {
        maxWidth: 800,
    },
});

export default function NewsDetailDrawer() {

    const newsDrawerState = useSelector(state => state.newsDrawerState)
    const news = useSelector(state => state.news)
    const classes = useStyles();

    return (
        <Drawer
            anchor="right"
            open={newsDrawerState}
        >
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        style={{ padding: "3px" }}
                        avatar={
                            <IconButton size="small" color="default" aria-label="Close">
                                <CloseRounded />
                            </IconButton>
                        }
                    />
                    {news.urlToImage && (<CardMedia
                        component="img"
                        alt={news.title}
                        image={news.urlToImage}
                        title={news.title}
                    />)}
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {news.title}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            {news.description}
                        </Typography>
                        <p></p>
                        <Typography variant="body2" color="textPrimary" component="p">
                            {news.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button color="primary" target="_blank" href={news.url} >More...</Button>
                    </CardActions>
                </Card>
            </div>
        </Drawer>
    )
}
