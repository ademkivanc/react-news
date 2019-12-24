import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { getNews, newsDrawerState } from '../actions'
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

const NewsCard = probs => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const showNews = function () { 
    dispatch(getNews(probs.news))
    dispatch(newsDrawerState(true))
  }

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={showNews}>
        {probs.news.urlToImage && (<CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={probs.news.urlToImage}
          title="Contemplative Reptile"
        />)}
        <CardContent>
          <Typography gutterBottom component="h4">
            {probs.news.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {probs.news.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default connect()(NewsCard)