import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Cards({ products, fetchMore }) {
  // React.useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  const handleScroll = ({currentTarget}) =>{
    if (currentTarget.scrollTop + currentTarget.clientHeight >=
      currentTarget.scrollHeight) {
      fetchMore();
    }
  }
  return (
    <React.Fragment>
      <TextField
        id="outlined-full-width"
        label="Label"
        style={{ left:0,
          right: 0,
          position: 'absolute',
          marginRight: 10,
          marginLeft: 10}}
        placeholder="Placeholder"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <div style={{ margin: 50, padding: 30, height: 600, overflowY:'auto', scrollbarWidth: 'none' }} onScroll={handleScroll}>

        <Grid container spacing={40} justify="center">
          {products.map(product => (
            <Grid item key={product.title} style={{ margin: 20, width: 200, height: 320 }}>
              <Card>
                <CardActionArea style={{ height: 280 }}>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    height="200"
                    image={product.imageUrl}
                    title={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                      {product.title}
                    </Typography>
                    <Typography component="p">{product.subTitle}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ marginTop: 8, paddingLeft: 0 }}>
                  {product.sizeVariation.map(size=>(<Button variant="text" size="small" color="primary">
                    {size.title}
                </Button>))}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

    </React.Fragment>
  );
}

export default Cards;