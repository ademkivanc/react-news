import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard'
import Grid from '@material-ui/core/Grid';
import { useParams } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import Utils from '../utils'

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    let { category } = useParams();
    category = category || 'technology';

    useEffect(() => {
        setLoading(true);
        Utils.fetchNews(category)
            .then((response) => setData(response.data.articles))
            .then(() => setLoading(false))
            .catch((e) => { setLoading(false); console.log("error", e) })
    }, [category]);

    return (
        <div> {loading && (<LinearProgress />)}
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="flex-start" spacing={3}>

                {data.map((item, i) => (
                    <Grid key={i} item xs={12} sm={4} md={3} >
                        <NewsCard news={item}></NewsCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
