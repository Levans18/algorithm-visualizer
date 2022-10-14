import AppBar from '@mui/material/AppBar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom'

import "./Home.css"

export default function Home(){

    return(
        <div className="Home">
            <AppBar position="static" className="header">
                <h1>Algorithm Visualizer</h1>
            </AppBar>
            <main>
                <Card variant="outlined" className="sorting-card card" style={{backgroundColor:"#293241"}}>
                    <Link to="/sorting" className="link">
                        <CardActionArea>
                            <CardMedia 
                            component="img"
                            height="200">
                            </CardMedia>
                            <CardContent className="card-content">
                                <Typography gutterBottom variant="h5" component="div">
                                    Sorting Visualizer
                                </Typography>
                                <Typography variant="body2">
                                    PeePeePooPooCheck
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
                <Card variant="outlined" className="path-finding-card card" style={{backgroundColor:"#293241"}}>
                    <Link to="/path-finding" className="link">
                        <CardActionArea>
                            <CardMedia 
                            component="img"
                            height="200">
                            </CardMedia>
                            <CardContent className="card-content">
                                <Typography gutterBottom variant="h5" component="div">
                                    Path Finding Visualizer
                                </Typography>
                                <Typography variant="body2">
                                    PeePeePooPooCheck
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            </main>
        </div>
    )
}