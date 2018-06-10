import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '86.25%', // 16:9
    },
    button: {
        textAlign: 'center',
    },
    content: {
        background: '#F9FAFB',
    }
};

function MediaCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card} elevation={0} >
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <div className={classes.content}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.title}
          </Typography>
                
                </CardContent>
                <CardActions>
                    <Button fullWidth elevation={0} variant="contained" color="primary" className={classes.button}>{props.button}</Button>
                </CardActions>
                </div>
            </Card>
        </div>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);